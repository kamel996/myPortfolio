import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "./src/index.js",
        "react-tilt": "./node_modules/react-tilt/tilt.js",
      },
    },
  },
});
