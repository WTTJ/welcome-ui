/// <reference types="vitest/config" />
import path from 'path'

import preserveDirectives from 'rollup-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import { getLibEntries } from './scripts/get-lib-entries'

function addUseClientDirectivePlugin() {
  return {
    name: 'add-use-client',
    transform(code) {
      // Only add for client-side files (adjust the filter as needed)
      return {
        code: `'use client';\n${code}`,
        map: null,
      }
    },
  }
}

export default defineConfig({
  build: {
    lib: {
      entry: getLibEntries(),
      formats: ['es'],
      name: 'Welcome UI',
    },
    rollupOptions: {
      external: ['react', '@xstyled/styled-components', 'styled-components'],
      output: {
        globals: {
          '@xstyled/styled-components': 'XStyled',
          react: 'React',
          'styled-components': 'Styled',
        },
      },
    },
  },
  plugins: [
    preserveDirectives(),
    addUseClientDirectivePlugin(),
    dts({
      entryRoot: 'src',
      exclude: ['**/tests/**', '**/docs/**', '*.json'],
      include: ['src'],
      outDir: 'dist/types',
    }),
    viteStaticCopy({
      targets: [
        {
          dest: '.',
          src: 'src/components/IconsFont/fonts',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/components'),
      '@/fonts': path.resolve(__dirname, './src/components/IconsFont/fonts'),
      '@/theme': path.resolve(__dirname, './src/theme'),
      '@/utils': path.resolve(__dirname, './src/utils'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    retry: 3,
    setupFiles: 'tests/setup.ts',
  },
})
