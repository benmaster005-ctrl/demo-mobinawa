/**
 * api/health.js — Vercel Serverless Function
 * Remplace le plugin Vite dev-only pour la production Vercel
 * Identique à livekitSipServer.js / GET /api/health
 */

function getEnv(key, fallback = '') {
  return (process.env[key] || fallback).trim();
}

export default function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const livekitHost = getEnv('LIVEKIT_URL');
  const livekitKey = getEnv('LIVEKIT_API_KEY');
  const trunkHost = getEnv('SIP_TRUNK_HOSTNAME');
  const trunkUser = getEnv('SIP_AUTH_USERNAME');

  return res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    configured: {
      livekit_host: livekitHost || 'Non configuré',
      livekit_ready: Boolean(livekitKey && !livekitKey.includes('votre_')),
      sip_trunk_host: trunkHost || 'Non configuré',
      sip_user: trunkUser || 'Non configuré',
    },
  });
}
