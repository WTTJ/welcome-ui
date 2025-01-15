/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const glob = require('glob')

const [pattern = ''] = process.argv.slice(2)

function mergeImports(content) {
  // Extract all `welcome-ui` imports (normal and type imports)
  const importRegex =
    /import\s+(type\s+)?{([^}]+)}\s+from\s+['"](@welcome-ui\/[^'"]+|welcome-ui)['"]/g
  const imports = new Set()
  const typeImports = new Set()
  let match

  while ((match = importRegex.exec(content)) !== null) {
    const isTypeImport = match[1]?.trim() === 'type'
    const importSet = isTypeImport ? typeImports : imports

    match[2]
      .split(',')
      .map(i => i.trim())
      .filter(Boolean)
      .forEach(i => {
        // Rename WuiTheme to ThemeValues for type imports
        if (isTypeImport && i === 'WuiTheme') {
          importSet.add('ThemeValues')
        } else {
          importSet.add(i)
        }
      })
  }

  // Remove old imports
  content = content.replace(
    /import\s+(type\s+)?{[^}]+}\s+from\s+['"](@welcome-ui\/[^'"]+|welcome-ui)['"]\n?/g,
    ''
  )

  // Add merged imports at top
  if (imports.size > 0) {
    const mergedImport = `import { ${Array.from(imports).join(', ')} } from 'welcome-ui';\n`
    content = mergedImport + content
  }

  if (typeImports.size > 0) {
    const mergedTypeImport = `import type { ${Array.from(typeImports).join(', ')} } from 'welcome-ui';\n`
    content = mergedTypeImport + content
  }

  return content
}

const files = glob.sync(pattern, {
  ignore: ['**/node_modules/**', '**/dist/**', '**/*.d.ts'],
})

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8')
  const newContent = mergeImports(content)
  fs.writeFileSync(file, newContent)
  // eslint-disable-next-line no-console
  console.log(`Updated ${file}`)
})
