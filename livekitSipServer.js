/**
 * livekitSipServer.js : Passerelle Backend Node.js intégrée pour Téléphonie WebRTC / SIP LiveKit
 * Conforme au backend de référence (test/server.js) avec LiveKitAPI & SIPOutboundConfig
 */

import { LiveKitAPI, AccessToken } from 'livekit-server-sdk';
import { SIPOutboundConfig } from '@livekit/protocol';

function getEnv(key, fallback = '') {
  return (process.env[key] || fallback).trim();
}

function getLiveKitClient() {
  const host = getEnv('LIVEKIT_URL');
  const apiKey = getEnv('LIVEKIT_API_KEY');
  const secret = getEnv('LIVEKIT_API_SECRET');

  return {
    host,
    apiKey,
    secret,
    client: new LiveKitAPI({ host, apiKey, secret }),
  };
}

export function normalizePhoneNumber(raw) {
  if (!raw || typeof raw !== 'string') return null;
  let cleaned = raw.trim().replace(/[\s\-\.\(\)]/g, '');
  if (cleaned.startsWith('00')) cleaned = '+' + cleaned.slice(2);
  if (!cleaned.startsWith('+')) {
    if (/^0[67]\d{8}$/.test(cleaned)) {
      cleaned = '+33' + cleaned.slice(1);
    } else if (/^[26]\d{8}$/.test(cleaned)) {
      cleaned = '+237' + cleaned;
    } else if (/^9\d{7}$/.test(cleaned)) {
      cleaned = '+237' + cleaned;
    } else {
      cleaned = '+' + cleaned;
    }
  }
  return /^\+[1-9]\d{6,14}$/.test(cleaned) ? cleaned : null;
}

export function livekitVitePlugin(env = {}) {
  Object.assign(process.env, env);

  return {
    name: 'livekit-sip-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const parsedUrl = new URL(req.url, 'http://localhost');
        const pathname = parsedUrl.pathname;

        // 1. POST /api/calls : Identique au backend de référence
        if (pathname === '/api/calls' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const rawDest = data.destinationNumber || data.destination_number || data.phoneNumber;
              const destination = normalizePhoneNumber(rawDest);

              if (!destination) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: false,
                  error: 'Numéro de téléphone invalide (format E.164 requis, ex: +237670000000)',
                }));
                return;
              }

              const { host: livekitHost, apiKey, secret, client: api } = getLiveKitClient();

              if (!livekitHost || !apiKey || !secret) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: false,
                  error: 'Configuration LiveKit manquante dans les variables d\'environnement.',
                }));
                return;
              }

              const roomName = `sip-room-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
              const browserIdentity = `web-caller-${Date.now()}`;

              // A. Token LiveKit temporaire pour le navigateur (WebRTC)
              const at = new AccessToken(apiKey, secret, {
                identity: browserIdentity,
                name: 'Utilisateur Mobinawa',
                ttl: '1h',
              });
              at.addGrant({
                roomJoin: true,
                room: roomName,
                canPublish: true,
                canSubscribe: true,
              });
              const browserToken = await at.toJwt();

              // B. Configuration du trunk SIP
              const trunkHostname = getEnv('SIP_TRUNK_HOSTNAME');
              const trunkUsername = getEnv('SIP_AUTH_USERNAME');
              const trunkPassword = getEnv('SIP_AUTH_PASSWORD');
              const trunkCountry = getEnv('SIP_DESTINATION_COUNTRY', 'CM');

              // Le numéro de l'utilisateur connecté devient le fromNumber
              const rawCaller = data.fromNumber || data.callerNumber || data.from || getEnv('SIP_CALLER_NUMBER', '');
              const callerNumber = normalizePhoneNumber(rawCaller) || rawCaller || destination;

              const transportEnv = getEnv('SIP_TRANSPORT', 'udp').toLowerCase();
              const transportMap = { udp: 1, tcp: 2, tls: 3 };
              const transport = transportMap[transportEnv] || 1;

              const waitUntilAnswered = getEnv('SIP_WAIT_UNTIL_ANSWERED', 'false') === 'true';
              const ringingTimeout = Number(getEnv('SIP_RINGING_TIMEOUT', '45')) || 45;

              const trunkConfig = new SIPOutboundConfig({
                hostname: trunkHostname,
                destinationCountry: trunkCountry,
                authUsername: trunkUsername,
                authPassword: trunkPassword,
                transport,
              });

              console.log(`[Mobinawa SIP] Appel de ${callerNumber} (fromNumber) vers ${destination} (<phone-number-to-dial>) | Room: ${roomName} | Trunk: ${trunkHostname}`);

              // C. Lancement de l'appel SIP sortant vers le destinataire
              try {
                const participant = await api.sip.createSipParticipant(
                  '', // Configuration inline
                  destination, // <phone-number-to-dial>
                  roomName,
                  {
                    participantIdentity: `sip-${destination.replace(/\+/g, '')}`,
                    participantName: `PSTN (${destination})`,
                    fromNumber: callerNumber, // numéro de l'utilisateur connecté
                    waitUntilAnswered,
                    ringingTimeout,
                  },
                  trunkConfig
                );
                console.log(`[Mobinawa SIP OK] Participant SIP associé: ${participant?.participantId || 'OK'}`);
              } catch (sipErr) {
                console.error('[Mobinawa SIP ERREUR]:', sipErr.message || sipErr);
                res.statusCode = 502;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({
                  success: false,
                  error: `Échec d'acheminement de l'appel vers l'opérateur: ${sipErr.message || 'Erreur SIP'}`,
                }));
                return;
              }

              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: true,
                call: {
                  roomName,
                  token: browserToken,
                  livekitUrl: livekitHost,
                  destination,
                  callerNumber,
                },
              }));
            } catch (err) {
              console.error('[Erreur /api/calls]:', err.message || err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message || 'Erreur interne' }));
            }
          });
          return;
        }

        // 2. POST /api/end-call : Terminer l'appel et détruire la salle
        if (pathname === '/api/end-call' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const roomName = data.roomName || data.room_name;
              if (roomName && typeof roomName === 'string' && roomName.startsWith('sip-room-')) {
                console.log(`[Mobinawa SIP] Clôture salle: ${roomName}`);
                try {
                  const { client: api } = getLiveKitClient();
                  await api.room.deleteRoom(roomName);
                } catch (err) {
                  console.warn('[Mobinawa deleteRoom]:', err.message);
                }
              }
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'Appel terminé avec succès.' }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }

        // 3. GET /api/health
        if (pathname === '/api/health') {
          const livekitHost = getEnv('LIVEKIT_URL');
          const livekitKey = getEnv('LIVEKIT_API_KEY');
          const trunkHost = getEnv('SIP_TRUNK_HOSTNAME');
          const trunkUser = getEnv('SIP_AUTH_USERNAME');

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({
            status: 'ok',
            uptime: Math.floor(process.uptime()),
            timestamp: new Date().toISOString(),
            configured: {
              livekit_host: livekitHost || 'Non configuré',
              livekit_ready: Boolean(livekitKey && !livekitKey.includes('votre_')),
              sip_trunk_host: trunkHost || 'Non configuré',
              sip_user: trunkUser || 'Non configuré',
            },
          }));
          return;
        }

        // 4. POST /api/auth ou GET /api/auth
        if (pathname === '/api/auth' || pathname === '/api/login') {
          const DATABASE_USERS = [
            {
              id: 'usr_33631237496',
              msisdn: '+33 6 31 23 74 96',
              msisdnRaw: '+33631237496',
              paysCode: 'FR',
              nom: 'Thomas Dubois',
              role: 'Utilisateur',
              verifieLe: '20/10/2026',
              soldeCompte: 25,
              devise: 'EUR',
            },
            {
              id: 'usr_23796613569',
              msisdn: '+237 96 61 35 69',
              msisdnRaw: '+23796613569',
              paysCode: 'CM',
              nom: 'Koffi Mensah',
              role: 'Utilisateur',
              verifieLe: '20/10/2026',
              soldeCompte: 15000,
              devise: 'FCFA',
            },
            {
              id: 'usr_33751597396',
              msisdn: '+33 7 51 59 73 96',
              msisdnRaw: '+33751597396',
              paysCode: 'FR',
              nom: 'Marie Claire',
              role: 'Utilisateur',
              verifieLe: '20/10/2026',
              soldeCompte: 40,
              devise: 'EUR',
            },
          ];

          function cleanPhoneAuth(raw) {
            if (!raw || typeof raw !== 'string') return '';
            let cleaned = raw.trim().replace(/[\s\-\.\(\)]/g, '');
            if (cleaned.startsWith('00')) cleaned = '+' + cleaned.slice(2);
            if (/^0[67]\d{8}$/.test(cleaned)) {
              cleaned = '+33' + cleaned.slice(1);
            } else if (/^[26]\d{8}$/.test(cleaned)) {
              cleaned = '+237' + cleaned;
            } else if (/^9\d{7}$/.test(cleaned)) {
              cleaned = '+237' + cleaned;
            }
            if (!cleaned.startsWith('+')) {
              cleaned = '+' + cleaned;
            }
            return cleaned;
          }

          if (req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: true,
              count: DATABASE_USERS.length,
              allowedNumbers: DATABASE_USERS.map((u) => u.msisdnRaw),
            }));
            return;
          }

          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              try {
                const data = JSON.parse(body || '{}');
                const rawNumber = data.phoneNumber || data.destinationNumber || data.msisdn || '';
                const normalized = cleanPhoneAuth(rawNumber);
                const user = DATABASE_USERS.find(
                  (u) =>
                    u.msisdnRaw === normalized ||
                    cleanPhoneAuth(u.msisdn) === normalized ||
                    cleanPhoneAuth(u.msisdnRaw) === normalized
                );

                res.setHeader('Content-Type', 'application/json');
                if (!user) {
                  res.statusCode = 401;
                  res.end(JSON.stringify({
                    success: false,
                    error: "Ce numéro de téléphone n'est pas enregistré dans notre base de données.",
                  }));
                  return;
                }

                res.statusCode = 200;
                res.end(JSON.stringify({
                  success: true,
                  message: 'Connexion réussie',
                  user,
                }));
              } catch (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
            return;
          }
        }

        next();
      });
    },
  };
}
