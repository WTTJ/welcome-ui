/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const glob = require('glob')
const [pattern] = process.argv.slice(2)

function transformStyledComponentFile(content) {
  // Transform styled.xxx function with various type annotations
  // Handles cases like:
  // styled.divBox(({ size }: Pick<IconBlockProps, 'size'>) => css`...`)
  // styled.box(({ blockColumns, containerColumns, id, isContentPublished }: WrapperProps) => css`...`)
  let newContent = content.replace(
    /styled\.(\w+)\(\s*\(\{([^}]+)\}:\s*([^)]+)\)\s*=>\s*css`([\s\S]*?)`\s*\)/g,
    (match, component, params, typeAnnotation, cssContent) => {
      return `styled.${component}<${typeAnnotation.trim()}>(({ ${params.trim()} }) => css\`${cssContent}\`)`
    }
  )

  // Also match styled(Component) with the same patterns
  newContent = newContent.replace(
    /styled\(([^)]+)\)\(\s*\(\{([^}]+)\}:\s*([^)]+)\)\s*=>\s*css`([\s\S]*?)`\s*\)/g,
    (match, component, params, typeAnnotation, cssContent) => {
      return `styled(${component})<${typeAnnotation.trim()}>(({ ${params.trim()} }) => css\`${cssContent}\`)`
    }
  )

  return newContent
}

// Main function to run the script
const files = glob.sync(pattern, {
  ignore: ['**/node_modules/**', '**/dist/**', '**/*.d.ts'],
})

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8')
  const newContent = transformStyledComponentFile(content)

  if (content !== newContent) {
    fs.writeFileSync(file, newContent)
    // eslint-disable-next-line no-console
    console.log(`Updated ${file} ✅`)
  }
})
