import fs from 'fs'
import path from 'path'

/**
 * Recursively copy a directory from src to dest
 */
export function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }
  fs.readdirSync(src).forEach(item => {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDirSync(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  })
}

/**
 * Recursively delete a directory
 */
export function deleteDirRecursive(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach(file => {
      const curPath = path.join(dirPath, file)
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteDirRecursive(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(dirPath)
  }
}

/**
 * Recursively find all files matching a pattern in a directory
 * @param {string} dir - Directory to search
 * @param {(file: string) => boolean} filterFn - Function to filter files
 * @returns {string[]} - Array of absolute file paths
 */
export function findFilesRecursive(dir, filterFn) {
  const results = []

  function scan(currentDir) {
    const items = fs.readdirSync(currentDir)
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
      const stat = fs.lstatSync(fullPath)

      if (stat.isDirectory()) {
        scan(fullPath)
      } else if (filterFn(fullPath)) {
        results.push(fullPath)
      }
    }
  }

  scan(dir)
  return results
}
