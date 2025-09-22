import { accessSync, existsSync, readdirSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'

import { withCustomConfig } from 'react-docgen-typescript'

const isWebsite = process.cwd().endsWith('website')
const parentPath = isWebsite ? join(process.cwd(), '..') : process.cwd()
const tsConfigPath = join(parentPath, 'lib', 'tsconfig.json')

// Get only ComponentOptions declarations for prevent all WuiProps
const propFilter = prop => {
  if (prop.declarations?.length > 0) {
    const isOptionDeclaration = prop.declarations.find(declaration => {
      if (declaration.name.includes('Options') && !declaration.fileName.includes('node_modules')) {
        return true
      }
      return false
    })

    return Boolean(isOptionDeclaration)
  }

  return true
}

const { parse } = withCustomConfig(tsConfigPath, {
  propFilter,
  shouldExtractValuesFromUnion: true,
  shouldRemoveUndefinedFromOptional: true,
})

const isComponentFile = file => {
  if (file === 'index.tsx') {
    return true
  }

  const [name, extension] = file.split('.')
  const firstLetter = name[0]

  // Components start with capital letter e.g. Title.js
  if (extension === 'tsx' && firstLetter === firstLetter.toUpperCase()) {
    return true
  }

  return false
}

// Get all files in a component folder
const getComponentFiles = async folder => {
  const componentFiles = await readdirSync(folder)

  return componentFiles.filter(isComponentFile)
}

// Get definitions from file
const getFileDefinitions = absolutePath => {
  const definitions = parse(absolutePath)

  return definitions
}

// Write properties.json file
const writePropsFile = (file, content) => {
  const withDocsPath = existsSync(join(file, 'docs'))

  if (withDocsPath) {
    const destPath = join(file, 'docs', 'properties.json')

    writeFileSync(destPath, JSON.stringify(content, null, 2))
  }

  return
}

// check if props entries are empty
const arePropsEmpty = obj => {
  // Helper function to check if an object is empty
  const isEmptyObject = obj => {
    return obj && typeof obj === 'object' && Object.keys(obj).length === 0
  }

  // Iterate through all keys in the object
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Object.entries(obj).every(([_, value]) => {
    // If there's a props object, check if it's empty
    if (value && typeof value === 'object' && 'props' in value) {
      return isEmptyObject(value.props)
    }
    return true // If no props object, consider it valid
  })
}

/**
 * Generates TypeScript documentation for UI components by scanning component directories,
 * extracting prop definitions from TypeScript files, and creating properties.json files
 * for components that have documented props.
 *
 * This function:
 * - Scans the components directory for folders containing a 'docs' subdirectory
 * - Extracts TypeScript definitions and props from component files
 * - Sorts and organizes component props by name
 * - Writes properties.json files for components with valid props
 * - Logs completion status to console
 *
 * @async
 * @function generateTypesDoc
 * @returns {Promise<void>} Resolves when all type documentation has been generated
 */
export async function generateTypesDoc() {
  // eslint-disable-next-line no-console
  console.log('Types doc generating...')

  // Determine the correct components directory to use
  const componentsDir = join(parentPath, 'lib/src/components')

  // Read all directories in the components folder with a docs folder
  const componentDirs = readdirSync(componentsDir, { withFileTypes: true })
    .filter(dirent => {
      if (!dirent.isDirectory()) return false
      // Check if the directory has a docs folder
      try {
        accessSync(join(componentsDir, dirent.name, 'docs'))
        return true
      } catch {
        return false
      }
    })
    .map(dirent => dirent.name)

  // Get all files in each component folder
  await componentDirs.map(async dirent => {
    const componentDir = resolve(componentsDir, dirent)
    const files = await getComponentFiles(componentDir)

    // Get definitions from each file
    files.forEach(async file => {
      const definitions = getFileDefinitions(`${componentDir}/${file}`)
      const componentProps = {}

      definitions.forEach(definition => {
        const { displayName, props, tags } = definition
        const name = tags?.name || displayName

        if (props) {
          componentProps[name] = {
            props: Object.keys(props)
              .sort()
              .reduce((obj, key) => {
                obj[key] = props[key]
                return obj
              }, {}),
            tag: tags?.tag,
          }
        }
      })

      // Write properties.json file check before if has no props
      if (!arePropsEmpty(componentProps)) {
        await writePropsFile(componentDir, componentProps)
      }
    })
  })
}
