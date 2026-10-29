import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@libs": fileURLToPath(new URL("../libs/src", import.meta.url)),
    },
  },
});
