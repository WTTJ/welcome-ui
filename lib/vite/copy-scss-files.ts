import fs from 'fs'
import path from 'path'

import type { Plugin } from 'vite'

export function copyScssFilesPlugin(rootDir: string) {
  const plugin: Plugin = {
    name: 'copy-scss-files',
    writeBundle() {
      const srcDir = path.resolve(rootDir, 'src/utils/scss')
      const destDir = path.resolve(rootDir, 'dist/scss')

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
