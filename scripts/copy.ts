const fs = require('fs')
const path = require('path')

const glob = require('glob')

function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function copyFile(source, dest) {
  fs.readFileSync(source, (err, data) => {
    if (err) throw err
    fs.writeFileSync(dest, data)
  })
}

try {
  const sourcePath = path.resolve(__dirname, '../../welcome-ui-v6/packages')
  const destPath = path.resolve(__dirname, '../lib/src/components')

  // Ensure source exists
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Source path not found: ${sourcePath}`)
  }

  const mdxFiles = glob.sync('**/docs/examples/*.tsx', { cwd: sourcePath })

  mdxFiles.forEach(file => {
    const componentName = file.split('/')[0]
    const destDir = path.join(destPath, componentName, 'docs')
    const sourceFile = path.join(sourcePath, file)
    const destFile = path.join(destPath, file)

    ensureDirectoryExists(destDir)
    fs.copyFileSync(sourceFile, destFile)
    console.log(`✓ Copied ${componentName}/${path.basename(file)}`)
  })
} catch (error) {
  console.error('Error:', error)
  process.exit(1)
}
