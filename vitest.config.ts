import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    browser: {
      api: { port: 9878, strictPort: false, host: '127.0.0.1' },
    },
  },
});
