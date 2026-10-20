/**
 * api/auth.js — Vercel Serverless Function & Authentication Handler
 * Authentification par numéro de téléphone enregistré en base de données.
 */

export const DATABASE_USERS = [
  {
    id: "usr_33631237496",
    msisdn: "+33 6 31 23 74 96",
    msisdnRaw: "+33631237496",
    paysCode: "FR",
    nom: "Thomas Dubois",
    role: "Utilisateur",
    verifieLe: "20/10/2026",
    soldeCompte: 25,
    devise: "EUR",
  },
  {
    id: "usr_23796613569",
    msisdn: "+237 96 61 35 69",
    msisdnRaw: "+23796613569",
    paysCode: "CM",
    nom: "Koffi Mensah",
    role: "Utilisateur",
    verifieLe: "20/10/2026",
    soldeCompte: 15000,
    devise: "FCFA",
  },
  {
    id: "usr_33751597396",
    msisdn: "+33 7 51 59 73 96",
    msisdnRaw: "+33751597396",
    paysCode: "FR",
    nom: "Marie Claire",
    role: "Utilisateur",
    verifieLe: "20/10/2026",
    soldeCompte: 40,
    devise: "EUR",
  },
];

export function cleanPhone(raw) {
  if (!raw || typeof raw !== "string") return "";
  let cleaned = raw.trim().replace(/[\s\-\.\(\)]/g, "");
  if (cleaned.startsWith("00")) cleaned = "+" + cleaned.slice(2);
  if (/^0[67]\d{8}$/.test(cleaned)) {
    cleaned = "+33" + cleaned.slice(1);
  } else if (/^[26]\d{8}$/.test(cleaned)) {
    cleaned = "+237" + cleaned;
  } else if (/^9\d{7}$/.test(cleaned)) {
    cleaned = "+237" + cleaned;
  }
  if (!cleaned.startsWith("+")) {
    cleaned = "+" + cleaned;
  }
  return cleaned;
}

export function findUserByPhone(rawPhone) {
  const normalized = cleanPhone(rawPhone);
  return (
    DATABASE_USERS.find(
      (u) =>
        u.msisdnRaw === normalized ||
        cleanPhone(u.msisdn) === normalized ||
        cleanPhone(u.msisdnRaw) === normalized
    ) || null
  );
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      count: DATABASE_USERS.length,
      allowedNumbers: DATABASE_USERS.map((u) => u.msisdnRaw),
    });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Méthode non autorisée" });
  }

  try {
    const data = req.body || {};
    const rawNumber = data.phoneNumber || data.destinationNumber || data.msisdn || "";
    const user = findUserByPhone(rawNumber);

    if (!user) {
      return res.status(401).json({
        success: false,
        error: "Ce numéro de téléphone n'est pas enregistré dans notre base de données.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Connexion réussie",
      user,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message || "Erreur lors de la connexion",
    });
  }
}

