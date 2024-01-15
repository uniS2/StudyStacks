import { defineConfig } from "vite";
import { resolve } from "node:path";
import checker from "vite-plugin-checker";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      components: resolve(__dirname, "./src/components"),
      pages: resolve(__dirname, "./src/pages"),
      assets: resolve(__dirname, "./src/assets"),
      layout: resolve(__dirname, "./src/layout"),
      styles: resolve(__dirname, "./src/styles"),
    },
  },
});
