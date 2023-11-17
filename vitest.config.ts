import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    silent: true,
    include: ['packages/**/tests/**.test.ts?(x)'],
  },
})
