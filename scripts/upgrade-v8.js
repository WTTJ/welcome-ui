/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-require-imports */
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
    (_, component, params, typeAnnotation, cssContent) => {
      return `styled.${component}<${typeAnnotation.trim()}>(({ ${params.trim()} }) => css\`${cssContent}\`)`
    }
  )

  // Also match styled(Component) with the same patterns
  newContent = newContent.replace(
    /styled\(([^)]+)\)\(\s*\(\{([^}]+)\}:\s*([^)]+)\)\s*=>\s*css`([\s\S]*?)`\s*\)/g,
    (_, component, params, typeAnnotation, cssContent) => {
      return `styled(${component})<${typeAnnotation.trim()}>(({ ${params.trim()} }) => css\`${cssContent}\`)`
    }
  )

  return newContent
}

function transformSystemToBox(content) {
  // Find all styled components using the ${system} pattern
  // This regex matches patterns like:
  // export const Component = styled.span`
  //   ${system}
  // `
  // and similar variations with different HTML elements
  return content.replace(
    /styled\.([a-z]+)`([\s\S]*?)\${system}([\s\S]*?)`/g,
    (match, element, before, after) => {
      // Replace with the Box variant (elementBox) and remove the ${system} part
      return `styled.${element}Box\`${before}${after}\``
    }
  )
}

// Main function to run the script
const files = glob.sync(pattern, {
  ignore: ['**/node_modules/**', '**/dist/**', '**/*.d.ts'],
})

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8')
  let newContent = transformStyledComponentFile(content)
  newContent = transformSystemToBox(newContent)

  if (content !== newContent) {
    fs.writeFileSync(file, newContent)

    console.log(`Updated ${file} ✅`)
  }
})
