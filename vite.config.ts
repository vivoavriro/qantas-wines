/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '**/*.styles.tsx',
        '**/*.types.ts',
        '**/*.index.ts',
        '**/eslint.config.js',
        '**/vite.config.ts',
        '**/vite-env.d.ts',
        '**/assets/**',
        '**/dist/**',
        '**/theme/**',
        '**/src/main.tsx',
        '**/src/App.tsx',
        '**/index-*.js',
      ],
    },
  },
});
