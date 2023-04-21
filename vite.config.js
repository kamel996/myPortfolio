import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    assetsDir: "assets",
    sourcemap: true,
    minify: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.js"),
      },
    },
  },
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
