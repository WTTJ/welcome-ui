/// <reference types="vitest" />

import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'path'

import preserveDirectives from 'rollup-preserve-directives'
import type { PluginOption, UserConfig } from 'vite'
import { defineConfig } from 'vite'

import { addUseClientDirectivePlugin } from './vite/add-use-client'
import { copyScssFilesPlugin } from './vite/copy-scss-files'
import { getLibEntries } from './vite/get-lib-entries'
import { injectCssImportsPlugin } from './vite/inject-css-imports'

const require = createRequire(import.meta.url)
// which can make plugin types incompatible. We keep a small local type to satisfy TS.
type DtsPluginFactory = (options: Record<string, unknown>) => PluginOption
const dts = require('vite-plugin-dts').default as DtsPluginFactory

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

type UserConfigWithTest = UserConfig & { test?: Record<string, unknown> }

const config: UserConfigWithTest = {
  build: {
    cssCodeSplit: true,
    lib: {
      entry: getLibEntries(),
      formats: ['es'],
      name: 'Welcome UI',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: '[name].[ext]',
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    preserveDirectives(),
    addUseClientDirectivePlugin(),
    injectCssImportsPlugin(),
    copyScssFilesPlugin(__dirname),
    dts({
      entryRoot: 'src',
      exclude: ['**/tests/**', '**/docs/**', '*.json'],
      include: ['src'],
      outDir: 'dist/types',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@tests': path.resolve(__dirname, './tests'),
    },
  },
  test: {
    css: true,
    environment: 'jsdom',
    globals: true,
    retry: 3,
    setupFiles: 'tests/setup.ts',
  },
}

export default defineConfig(config)
