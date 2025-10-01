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
