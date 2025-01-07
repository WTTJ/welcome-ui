/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const glob = require('glob')

function mergeImports(content) {
  // Extract all welcome-ui imports
  const importRegex = /import\s+{([^}]+)}\s+from\s+['"](@welcome-ui\/[^'"]+|welcome-ui)['"]/g
  const imports = new Set()
  let match

  while ((match = importRegex.exec(content)) !== null) {
    // Skip icons
    if (match[0].includes('@welcome-ui/icons')) continue

    // Add each import to Set
    match[1]
      .split(',')
      .map(i => i.trim())
      .filter(Boolean)
      .forEach(i => imports.add(i))
  }

  // Remove old imports
  content = content.replace(
    /import\s+{[^}]+}\s+from\s+['"](@welcome-ui\/[^'"]+|welcome-ui)['"]\n?/g,
    match => (match.includes('@welcome-ui/icons') ? match : '')
  )

  // Add merged import at top
  if (imports.size > 0) {
    const mergedImport = `import { ${Array.from(imports).join(', ')} } from 'welcome-ui'\n`
    content = mergedImport + content
  }

  return content
}

const files = glob.sync('lib/src/components/**/docs/**/*.tsx')
files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8')
  const newContent = mergeImports(content)
  fs.writeFileSync(file, newContent)
  // eslint-disable-next-line no-console
  console.log(`Updated ${file}`)
})
