/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const glob = require('glob')

const [pattern = ''] = process.argv.slice(2)

// Transformation function for styled components
const transformStyledComponent = code => {
  let transformed = code

  // Original regex for basic styled components
  const regex = /styled\.(\w+)\(\s*\(\{([^}]+)\}:\s*(\{[^}]+\})\)\s*=>\s*css`([\s\S]*?)`\s*\)/g

  // New regex for withConfig styled components
  const withConfigRegex =
    /styled\.(\w+)\.withConfig\(\{([^}]+)\}\)\(\s*\(\{([^}]+)\}:\s*(\{[^}]+\})\)\s*=>\s*css`([\s\S]*?)`\s*\)/g

  // Transform withConfig components
  transformed = transformed.replace(
    withConfigRegex,
    (match, component, config, params, types, styles) => {
      const cleanParams = params
        .split(',')
        .map(param => param.trim().split(':')[0].trim())
        .join(', ')

      // Remove ${system}; from styles
      const cleanStyles = styles.replace(/\${system};?\s*/g, '')

      return `styled.${component}.withConfig({${config}})<${types}>(\n  ({ ${cleanParams} }) => css\`${cleanStyles}\`\n)`
    }
  )

  // Transform regular styled components
  transformed = transformed.replace(regex, (match, component, params, types, styles) => {
    const cleanParams = params
      .split(',')
      .map(param => param.trim().split(':')[0].trim())
      .join(', ')

    // Remove ${system}; from styles
    const cleanStyles = styles.replace(/\${system};?\s*/g, '')

    return `styled.${component}<${types}>(\n  ({ ${cleanParams} }) => css\`${cleanStyles}\`\n)`
  })

  return transformed
}

// Main function to run the script
const files = glob.sync(pattern, {
  ignore: ['**/node_modules/**', '**/dist/**', '**/*.d.ts'],
})

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8')
  const newContent = transformStyledComponent(content)

  if (content !== newContent) {
    fs.writeFileSync(file, newContent)
    // eslint-disable-next-line no-console
    console.log(`Updated ${file}`)
  }
})
