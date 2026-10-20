/**
 * server.js : Serveur Node.js Production autonome pour Mobinawa
 * - Sert l'application React compilée (dossier ./dist) avec support SPA et cache
 * - Exécute la passerelle API SIP / LiveKit (/api/calls, /api/end-call, /api/health)
 */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LiveKitAPI, AccessToken } from "livekit-server-sdk";
import { SIPOutboundConfig } from "@livekit/protocol";

// Chargement automatique des variables d'environnement (.env)
if (typeof process.loadEnvFile === "function") {
  try {
    process.loadEnvFile();
  } catch (_) {}
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, "dist");
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

function getEnv(key, fallback = "") {
  return (process.env[key] || fallback).trim();
}

function getLiveKitClient() {
  const host = getEnv("LIVEKIT_URL");
  const apiKey = getEnv("LIVEKIT_API_KEY");
  const secret = getEnv("LIVEKIT_API_SECRET");

  return {
    host,
    apiKey,
    secret,
    client: new LiveKitAPI({ host, apiKey, secret }),
  };
}

export function normalizePhoneNumber(raw) {
  if (!raw || typeof raw !== "string") return null;
  let cleaned = raw.trim().replace(/[\s\-\.\(\)]/g, "");
  if (cleaned.startsWith("00")) cleaned = "+" + cleaned.slice(2);
  if (!cleaned.startsWith("+")) {
    if (/^[26]\d{8}$/.test(cleaned)) {
      cleaned = "+237" + cleaned;
    } else {
      cleaned = "+" + cleaned;
    }
  }
  return cleaned;
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1e6) {
        req.destroy();
        reject(new Error("Corps de requête trop volumineux"));
      }
    });
    req.on("end", () => {
      if (!body) return resolve({});
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(new Error("JSON invalide"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, data, statusCode = 200) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  });
  res.end(JSON.stringify(data));
}

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
};

const server = http.createServer(async (req, res) => {
  // Gestion CORS pré-vol
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Max-Age": "86400",
    });
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = parsedUrl.pathname;

  // 1. POST /api/calls
  if (pathname === "/api/calls" && req.method === "POST") {
    try {
      const body = await parseJsonBody(req);
      const destination = normalizePhoneNumber(body.destinationNumber || body.destination_number);

      if (!destination) {
        return sendJson(res, { success: false, error: "Numéro de téléphone invalide." }, 400);
      }

      const { host: livekitHost, apiKey, secret, client: api } = getLiveKitClient();
      if (!livekitHost || !apiKey || !secret) {
        return sendJson(res, { success: false, error: "Configuration LiveKit manquante (.env)." }, 500);
      }

      const roomName = `sip-room-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
      const browserIdentity = `web-caller-${Date.now()}`;

      const at = new AccessToken(apiKey, secret, {
        identity: browserIdentity,
        name: body.orgName || "Utilisateur Mobinawa",
        ttl: "1h",
      });
      at.addGrant({
        roomJoin: true,
        room: roomName,
        canPublish: true,
        canSubscribe: true,
        canPublishData: true,
      });
      const browserToken = await at.toJwt();

      const trunkHost = getEnv("SIP_TRUNK_HOSTNAME", "51.91.68.158");
      const trunkUser = getEnv("SIP_AUTH_USERNAME");
      const trunkPass = getEnv("SIP_AUTH_PASSWORD");
      const callerNumber = getEnv("SIP_CALLER_NUMBER", destination);

      const trunkConfig = new SIPOutboundConfig({
        hostname: trunkHost,
        transport: 1, // UDP
        authUsername: trunkUser,
        authPassword: trunkPass,
      });

      console.log(`[Mobinawa Prod] Appel vers ${destination} | Room: ${roomName} | Trunk: ${trunkHost}`);

      try {
        const participant = await api.sip.createSipParticipant(
          "",
          destination,
          roomName,
          {
            participantIdentity: `sip-${destination.replace(/\+/g, "")}`,
            participantName: `${body.orgName || "Contact"} (${destination})`,
            fromNumber: callerNumber,
            waitUntilAnswered: false,
            ringingTimeout: 45,
          },
          trunkConfig
        );
        console.log(`[Mobinawa Prod OK] Participant SIP associé: ${participant?.participantId || "OK"}`);
      } catch (sipErr) {
        console.error("[Mobinawa Prod SIP ERR]:", sipErr.message || sipErr);
        return sendJson(res, { success: false, error: `Échec SIP: ${sipErr.message || "Erreur de routage"}` }, 502);
      }

      return sendJson(res, {
        success: true,
        call: {
          roomName,
          token: browserToken,
          livekitUrl: livekitHost,
          destination,
          callerNumber,
        },
      });
    } catch (err) {
      console.error("[Mobinawa Prod Error /api/calls]:", err);
      return sendJson(res, { success: false, error: err.message || "Erreur interne" }, 500);
    }
  }

  // 2. POST /api/end-call
  if (pathname === "/api/end-call" && req.method === "POST") {
    try {
      const body = await parseJsonBody(req);
      const roomName = body.roomName || body.room_name;
      if (roomName && typeof roomName === "string" && roomName.startsWith("sip-room-")) {
        console.log(`[Mobinawa Prod] Fermeture salle: ${roomName}`);
        try {
          const { client: api } = getLiveKitClient();
          await api.room.deleteRoom(roomName);
        } catch (_) {}
      }
      return sendJson(res, { success: true, message: "Appel terminé." });
    } catch (err) {
      return sendJson(res, { success: false, error: err.message }, 500);
    }
  }

  // 3. GET /api/health
  if (pathname === "/api/health") {
    const livekitHost = getEnv("LIVEKIT_URL");
    const livekitKey = getEnv("LIVEKIT_API_KEY");
    const trunkHost = getEnv("SIP_TRUNK_HOSTNAME");
    const trunkUser = getEnv("SIP_AUTH_USERNAME");

    return sendJson(res, {
      status: "ok",
      uptime: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      configured: {
        livekit_host: livekitHost || "Non configuré",
        livekit_ready: Boolean(livekitKey && !livekitKey.includes("votre_")),
        sip_trunk_host: trunkHost || "Non configuré",
        sip_user: trunkUser || "Non configuré",
      },
    });
  }

  // 4. Distribution des fichiers statiques du dossier ./dist (avec fallback SPA)
  if (!fs.existsSync(DIST_DIR)) {
    res.writeHead(503, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>503 - Application non compilée</h1><p>Veuillez exécuter <code>npm run build</code> avant de démarrer le serveur.</p>");
    return;
  }

  let requestPath = pathname === "/" ? "/index.html" : pathname;
  const safePath = path.normalize(requestPath).replace(/^(\.\.[\/\\])+/, "");
  let filePath = path.join(DIST_DIR, safePath);

  // Si le fichier demandé n'existe pas ou est une route cliente, servir index.html (SPA Fallback)
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    filePath = path.join(DIST_DIR, "index.html");
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  // Cache immuable pour les assets versionnés (vite), no-cache pour index.html
  const isHashedAsset = filePath.includes("assets") && !filePath.endsWith("index.html");
  const cacheControl = isHashedAsset
    ? "public, max-age=31536000, immutable"
    : "no-cache";

  res.writeHead(200, {
    "Content-Type": contentType,
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": cacheControl,
  });

  const stream = fs.createReadStream(filePath);
  stream.pipe(res);
});

server.listen(PORT, HOST, () => {
  console.log(`=======================================================`);
  console.log(`  Mobinawa Production Server en écoute sur http://${HOST}:${PORT}`);
  console.log(`  Dossier statique: ${DIST_DIR}`);
  console.log(`  Endpoints API: /api/calls, /api/end-call, /api/health`);
  console.log(`=======================================================`);
});

