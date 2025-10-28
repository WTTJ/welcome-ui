import fs from 'fs'
import path from 'path'

import preserveDirectives from 'rollup-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { getLibEntries } from './scripts/get-lib-entries'

function addUseClientDirectivePlugin() {
  return {
    name: 'add-use-client',
    transform(code, path) {
      let clientString = ''
      // Only add for client-side and not css or scss files (adjust the filter as needed)
      if (!path.endsWith('.css') && !path.endsWith('.scss')) {
        clientString = "'use client';\n"
      }

      return {
        code: `${clientString}${code}`,
        map: null,
      }
    },
  }
}

function copyScssFilesPlugin() {
  return {
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
}

export default defineConfig({
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
})
