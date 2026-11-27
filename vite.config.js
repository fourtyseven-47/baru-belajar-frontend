import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // Mencegah Vite reload setiap kali db.json berubah.
  server: {
    watch: {
      ignored: ["**/db.json"],
    },
  },
});