// File and directory operations for upgrade-v9.mjs
import fs from 'fs'
import path from 'path'

/**
 * Recursively walk a directory and apply a callback to each file.
 * @param {string} dir - Directory to walk
 * @param {(filePath: string) => void} fileCallback - Callback for each file
 */
export function walkDirectory(dir, fileCallback) {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      walkDirectory(filePath, fileCallback)
    } else {
      fileCallback(filePath)
    }
  })
}

export function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content, 'utf8')
}
