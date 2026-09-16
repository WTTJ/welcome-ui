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

function injectCssImportsPlugin() {
  const plugin: Plugin = {
    generateBundle(_options, bundle) {
      const claimedCss = new Set<string>()

      for (const file of Object.values(bundle)) {
        if (file.type !== 'chunk') continue

        const importedCss = (file as { viteMetadata?: { importedCss?: Set<string> } }).viteMetadata
          ?.importedCss

        if (!importedCss || importedCss.size === 0) continue

        for (const cssFile of importedCss) claimedCss.add(cssFile)

        const imports = [...importedCss].map(cssFile => `import './${cssFile}';\n`).join('')
        const useClientMatch = file.code.match(/^(["']use client["'];\s*)/)

        file.code = useClientMatch
          ? file.code.replace(useClientMatch[0], `${useClientMatch[0]}${imports}`)
          : imports + file.code
      }

      // Fail loudly rather than silently publishing a CSS asset no chunk ever loads.
      for (const file of Object.values(bundle)) {
        if (
          file.type === 'asset' &&
          file.fileName.endsWith('.css') &&
          !claimedCss.has(file.fileName)
        ) {
          this.error(
            `Orphaned CSS asset "${file.fileName}": no JS chunk imports it. Check assetFileNames/chunkFileNames in rollupOptions.output.`
          )
        }
      }
    },
    name: 'inject-css-imports',
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
    injectCssImportsPlugin(),
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
