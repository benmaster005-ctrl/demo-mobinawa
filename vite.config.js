import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { livekitVitePlugin } from "./livekitSipServer.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isProd = mode === "production";

  return {
    plugins: [react(), livekitVitePlugin(env)],
    esbuild: isProd
      ? {
          drop: ["console", "debugger"],
          legalComments: "none",
        }
      : undefined,
    build: {
      target: "es2020",
      cssCodeSplit: true,
      minify: "esbuild",
      chunkSizeWarningLimit: 1200,
      sourcemap: false,
      reportCompressedSize: false,
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes("node_modules")) {
              if (id.includes("livekit-client") || id.includes("@livekit")) {
                return "vendor-livekit";
              }
              if (id.includes("react") || id.includes("react-dom") || id.includes("scheduler")) {
                return "vendor-react";
              }
              if (id.includes("lucide-react")) {
                return "vendor-icons";
              }
              return "vendor-core";
            }
          },
        },
      },
    },
  };
});
