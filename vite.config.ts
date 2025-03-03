import { defineConfig as testConfig } from 'vitest/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const config = defineConfig({
  plugins: [react(), tsconfigPaths()],
});

// Vitest configuration
const tstConfig = testConfig({
  test: {
    environment: 'jsdom',
  },
});

// Merge configurations
export default {
  ...config,
  ...tstConfig,
};
