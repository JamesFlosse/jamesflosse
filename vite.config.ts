import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// La configuration des tests vit dans vitest.config.ts : ce fichier-ci est
// évalué par le build de production et ne doit dépendre d'aucun paquet de test.
export default defineConfig({
  plugins: [react()],
});
