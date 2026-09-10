import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      '@app/contracts': fileURLToPath(new URL('./shared/contracts/index.ts', import.meta.url)),
    },
  },
  test: {
    include: [
      'tests/unit/**/*.spec.ts',
      'tests/integration/**/*.spec.ts',
      'shared/contracts/**/*.spec.ts',
    ],
  },
});
