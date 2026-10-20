import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Note: livekitVitePlugin est utilisé uniquement en développement local (npm run dev).
// En production Vercel, les routes /api/* sont gérées par les Vercel Serverless Functions (api/*.js).
const isDev = process.env.NODE_ENV !== "production";

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  let plugins = [react()];

  // En développement uniquement : activer le plugin Vite pour les routes API locales
  if (isDev) {
    try {
      const { livekitVitePlugin } = await import("./livekitSipServer.js");
      plugins.push(livekitVitePlugin(env));
    } catch (e) {
      console.warn("[Mobinawa] livekitVitePlugin non disponible:", e.message);
    }
  }

  return {
    plugins,
  };
});
