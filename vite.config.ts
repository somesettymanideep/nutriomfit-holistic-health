import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";


function spaFallback() {
  return {
    name: "spa-fallback",
    closeBundle() {
      const fs = require("fs");
      const indexHtml = fs.readFileSync("./dist/index.html", "utf-8");
      fs.writeFileSync("./dist/404.html", indexHtml);
    },
  };
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/nutriomfit-holistic-health/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(),spaFallback()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
