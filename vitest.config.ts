import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

// Reprend la configuration Vite du projet et n'y ajoute que le volet tests.
// Séparé de vite.config.ts pour que le build de production n'ait jamais
// besoin de vitest (un `npm ci --omit=dev` doit pouvoir construire le site).
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      // Les imports .scss sont neutralisés : les tests portent sur la
      // structure du DOM, pas sur le rendu visuel.
      css: false,
    },
  })
);
