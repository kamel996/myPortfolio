import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        'react-tilt': './node_modules/react-tilt/src/tilt.js'
      }
    }
  }
});
