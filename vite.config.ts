/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    // Les imports .scss sont neutralisés : les tests portent sur la structure
    // du DOM, pas sur le rendu visuel.
    css: false,
  },
});
