import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { livekitVitePlugin } from "./livekitSipServer.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), livekitVitePlugin(env)],
  };
});
