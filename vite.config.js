import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Enable source maps
  },
  base: "/My_Portfolio/", // Ensure this matches your repository name
});
