import { defineConfig } from '@playwright/test'

export default defineConfig({
  retries: 0,
  testDir: './src/components',
  testMatch: '**/*.e2e.spec.ts',
  timeout: 30 * 1000,
  use: {
    baseURL: 'http://localhost:3020', // change if needed!
    headless: true,
  },
})
