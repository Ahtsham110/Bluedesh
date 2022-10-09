// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        portfolio: resolve(__dirname, "portfolio.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        development: resolve(__dirname, "development.html"),
        seo: resolve(__dirname, "seo.html"),

      },
    },
  },
});