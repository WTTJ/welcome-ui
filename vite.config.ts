import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: ['./tests/setup.ts', './tests/globals.ts'],
    // coverage: {
    //   exclude: ['src/**/styles.ts', 'src/**/*.test.*', 'tests'],
    // },
  },
})
