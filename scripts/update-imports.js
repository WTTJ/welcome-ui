/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const glob = require('glob')

const [pattern = ''] = process.argv.slice(2)

function transformToUpperCamelCase(str) {
  return str.replace(/\/([a-z-]+)$/, match => {
    // Remove leading slash and transform each word to uppercase
    return (
      '/' +
      match
        .slice(1)
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('')
    )
  })
}

function transformImports(content) {
  // Handle special cases first
  content = content.replace(/@welcome-ui\/core/g, 'welcome-ui/theme')
  content = content.replace(/@welcome-ui\/copy/g, 'welcome-ui/utils')
  content = content.replace(/@welcome-ui\/utils/g, 'welcome-ui/utils')
  content = content.replace(/@welcome-ui\/icons.font/g, 'welcome-ui/IconsFont')

  // New rule for IconsFont import transformation
  content = content.replace(
    /import\s+{?\s*Icons\s*}?\s+from\s+'IconsFont'/g,
    "import { IconsFont } from 'IconsFonts'"
  )

  // Replace WuiTheme with ThemeValues
  content = content.replace(/\bWuiTheme\b/g, 'ThemeValues')

  // Replace WuiProvider with welcome-ui/WuiProvider
  content = content.replace(
    /import\s+{?\s*WuiProvider\s*}?\s+from\s+'@welcome-ui\/core'/g,
    "import { WuiProvider } from 'welcome-ui/WuiProvider'"
  )

  // Transform WuiTheme to ThemeValues in imports, preserving type imports
  const importBlockRegex = /(import\s+(?:type\s+)?){([^}]+)}\s+from/g
  content = content.replace(importBlockRegex, (match, importStatement, importBlock) => {
    const transformedImports = importBlock
      .split(',')
      .map(item => item.trim())
      .map(item => (item === 'WuiTheme' ? 'ThemeValues' : item))
      .join(', ')
    return `${importStatement}{ ${transformedImports} } from`
  })

  // Transform other @welcome-ui imports
  const importRegex = /from\s+['"](@welcome-ui\/[^'"]+)['"]/g
  content = content.replace(importRegex, (match, importPath) => {
    // Remove @ prefix and transform to UpperCamelCase
    const newPath = importPath.replace('@welcome-ui/', 'welcome-ui/')
    return `from '${transformToUpperCamelCase(newPath)}'`
  })

  return content
}

const files = glob.sync(pattern, {
  ignore: ['**/node_modules/**', '**/dist/**', '**/*.d.ts'],
})

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8')
  const newContent = transformImports(content)

  if (content !== newContent) {
    fs.writeFileSync(file, newContent)
    // eslint-disable-next-line no-console
    console.log(`Updated ${file}`)
  }
})
