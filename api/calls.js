/**
 * api/calls.js — Vercel Serverless Function
 * Remplace le plugin Vite dev-only pour la production Vercel
 * Identique à livekitSipServer.js / POST /api/calls
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

function normalizePhoneNumber(raw) {
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
    const rawDest = data.destinationNumber || data.destination_number || data.phoneNumber;
    const destination = normalizePhoneNumber(rawDest);

    if (!destination) {
      return res.status(400).json({
        success: false,
        error: 'Numéro de téléphone invalide (format E.164 requis, ex: +237670000000)',
      });
    }

    const { host: livekitHost, apiKey, secret, client: api } = getLiveKitClient();

    if (!livekitHost || !apiKey || !secret) {
      return res.status(500).json({
        success: false,
        error: 'Configuration LiveKit manquante dans les variables d\'environnement.',
      });
    }

    const roomName = `sip-room-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const browserIdentity = `web-caller-${Date.now()}`;

    // Token LiveKit pour le navigateur (WebRTC)
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

    // Configuration trunk SIP
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

    try {
      const participant = await api.sip.createSipParticipant(
        '',
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
      return res.status(502).json({
        success: false,
        error: `Échec d'acheminement de l'appel vers l'opérateur: ${sipErr.message || 'Erreur SIP'}`,
      });
    }

    return res.status(200).json({
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
    console.error('[Erreur /api/calls]:', err.message || err);
    return res.status(500).json({ success: false, error: err.message || 'Erreur interne' });
  }
}

