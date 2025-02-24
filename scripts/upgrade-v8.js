const fs = require('fs').promises
const path = require('path')

// Transformation function for styled components
const transformStyledComponent = code => {
  // Match styled component with type definition inside the function parameter
  const regex = /styled\.(\w+)\(\s*\(\{([^}]+)\}:\s*(\{[^}]+\})\)\s*=>\s*css`([\s\S]*?)`\s*\)/g

  return code.replace(regex, (match, component, params, types, styles) => {
    // Clean up the params by removing type annotations
    const cleanParams = params
      .split(',')
      .map(param => {
        return param.trim().split(':')[0].trim()
      })
      .join(', ')

    // Build the new styled component string
    return `styled.${component}<${types}>(\n  ({ ${cleanParams} }) => css\`${styles}\`\n)`
  })
}

// Function to transform file content
const transformFile = content => {
  let transformedContent = content
  let lastTransformedContent

  // Keep transforming until no more changes are made
  // This handles nested or multiple styled components in the same file
  do {
    lastTransformedContent = transformedContent
    transformedContent = transformStyledComponent(transformedContent)
  } while (transformedContent !== lastTransformedContent)

  return transformedContent
}

// Function to find all ts/tsx files recursively
async function findTypeScriptFiles(dir) {
  const files = await fs.readdir(dir)
  const typeScriptFiles = []

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = await fs.stat(filePath)

    if (stat.isDirectory()) {
      if (file === 'node_modules' || file === '.git') continue
      typeScriptFiles.push(...(await findTypeScriptFiles(filePath)))
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      typeScriptFiles.push(filePath)
    }
  }

  return typeScriptFiles
}

// Function to process a single file
async function processFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8')

    // Check if file contains styled components
    if (!content.includes('styled.')) {
      return
    }

    const transformedContent = transformFile(content)

    if (content !== transformedContent) {
      await fs.writeFile(filePath, transformedContent)
      console.log(`✓ Transformed ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error)
    return false
  }
}

// Main function to run the script
async function main() {
  try {
    const target = process.argv[2] || process.cwd()
    console.log(`Processing target: ${target}`)

    let files = []
    const stat = await fs.stat(target)

    if (stat.isDirectory()) {
      files = await findTypeScriptFiles(target)
    } else if (target.endsWith('.ts') || target.endsWith('.tsx')) {
      files = [target]
    }

    console.log(`Found ${files.length} TypeScript file(s)`)

    let transformedCount = 0
    for (const file of files) {
      const wasTransformed = await processFile(file)
      if (wasTransformed) transformedCount++
    }

    console.log('\nTransformation complete!')
    console.log(`Transformed ${transformedCount} files`)
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()
