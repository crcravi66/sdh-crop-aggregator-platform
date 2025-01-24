import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), Pages()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // '/api/': {
      //   target: 'http://127.0.0.1:9000',
      //   // target: 'https://brdev.fly.dev',
      //   changeOrigin: true,
      // },
    },
    port: 3000
  }
});
