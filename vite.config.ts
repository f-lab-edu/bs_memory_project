import { defineConfig as testConfig } from 'vitest/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const config = defineConfig({
  plugins: [react(), tsconfigPaths({ root: './' })],
});

// Vitest configuration
const tstConfig = testConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    printConsoleTrace: true,
  },
});

// Merge configurations
export default {
  ...config,
  ...tstConfig,
};
