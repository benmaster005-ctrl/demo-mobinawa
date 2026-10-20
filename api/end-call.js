/**
 * api/end-call.js — Vercel Serverless Function
 * Remplace le plugin Vite dev-only pour la production Vercel
 * Identique à livekitSipServer.js / POST /api/end-call
 */

import { LiveKitAPI } from 'livekit-server-sdk';

function getEnv(key, fallback = '') {
  return (process.env[key] || fallback).trim();
}

function getLiveKitClient() {
  const host = getEnv('LIVEKIT_URL');
  const apiKey = getEnv('LIVEKIT_API_KEY');
  const secret = getEnv('LIVEKIT_API_SECRET');
  return {
    client: new LiveKitAPI({ host, apiKey, secret }),
  };
}

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Méthode non autorisée' });
  }

  try {
    const data = req.body || {};
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

    return res.status(200).json({ success: true, message: 'Appel terminé avec succès.' });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
