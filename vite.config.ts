import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    headers: {
      'X-Frame-Options': 'DENY'
    }
  },
  server: {
    headers: {
      'X-Frame-Options': 'DENY'
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
