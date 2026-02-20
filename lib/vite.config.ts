/// <reference types="vitest" />

import fs from 'fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import path from 'path'

import preserveDirectives from 'rollup-preserve-directives'
import type { Plugin, PluginOption, UserConfig } from 'vite'
import { defineConfig } from 'vite'

import { getLibEntries } from './scripts/get-lib-entries'

const require = createRequire(import.meta.url)
// which can make plugin types incompatible. We keep a small local type to satisfy TS.
type DtsPluginFactory = (options: Record<string, unknown>) => PluginOption
const dts = require('vite-plugin-dts').default as DtsPluginFactory

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

type UserConfigWithTest = UserConfig & { test?: Record<string, unknown> }

function addUseClientDirectivePlugin() {
  const plugin: Plugin = {
    name: 'add-use-client',
    transform(code: string, id: string) {
      let clientString = ''
      // Only add for client-side and not css or scss files (adjust the filter as needed)
      if (!id.endsWith('.css') && !id.endsWith('.scss')) {
        clientString = "'use client';\n"
      }

      return {
        code: `${clientString}${code}`,
        map: null,
      }
    },
  }

  return plugin
}

function copyScssFilesPlugin() {
  const plugin: Plugin = {
    name: 'copy-scss-files',
    writeBundle() {
      const srcDir = path.resolve(__dirname, 'src/utils/scss')
      const destDir = path.resolve(__dirname, 'dist/scss')

      // Ensure destination directory exists
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true })
      }

      // Read all SCSS files from source directory
      const scssFiles = fs.readdirSync(srcDir).filter(file => file.endsWith('.scss'))

      // Copy each SCSS file to destination
      scssFiles.forEach(file => {
        const srcPath = path.join(srcDir, file)
        const destPath = path.join(destDir, file)
        fs.copyFileSync(srcPath, destPath)
      })
    },
  }

  return plugin
}

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
    copyScssFilesPlugin(),
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
