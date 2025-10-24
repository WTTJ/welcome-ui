import { execSync } from 'child_process'
import { accessSync, existsSync, readdirSync, statSync, writeFileSync } from 'fs'
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

// Get changed files from git
const getChangedFiles = () => {
  try {
    // Try multiple git commands to find changed files
    const gitCommands = [
      'git diff --name-only HEAD~1...HEAD', // Compare with previous commit
      'git diff --name-only --cached', // Staged files
      'git diff --name-only', // Working directory changes
      'git diff --name-only origin/main...HEAD', // Compare with origin/main
      'git diff --name-only main...HEAD', // Compare with local main
    ]

    for (const gitCommand of gitCommands) {
      try {
        const output = execSync(gitCommand, { cwd: parentPath, encoding: 'utf8', stdio: 'pipe' })
        const files = output
          .trim()
          .split('\n')
          .filter(file => file && file.includes('.tsx'))

        if (files.length > 0) {
          // eslint-disable-next-line no-console
          console.log(`Using git command: ${gitCommand}`)
          return files
        }
      } catch {
        // Try next command
        continue
      }
    }

    // If no git changes found, return empty array (will process all)
    // eslint-disable-next-line no-console
    console.log('No changed TypeScript files found in git')
    return []
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn('Could not get changed files from git, processing all files:', error.message)
    return []
  }
}

// Check if component directory has changed files
const hasChangedFiles = (componentDir, changedFiles) => {
  if (changedFiles.length === 0) return true // If no git info, process all

  const relativePath = componentDir.replace(parentPath + '/', '')
  return changedFiles.some(file => file.startsWith(relativePath))
}

// Check if properties.json is newer than component files
const isPropertiesFileUpToDate = (componentDir, files) => {
  const propertiesPath = join(componentDir, 'docs', 'properties.json')

  if (!existsSync(propertiesPath)) return false

  try {
    const propertiesStats = statSync(propertiesPath)

    // Check if any component file is newer than properties.json
    return !files.some(file => {
      const filePath = join(componentDir, file)
      const fileStats = statSync(filePath)
      return fileStats.mtime > propertiesStats.mtime
    })
  } catch {
    return false
  }
}

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
const getComponentFiles = folder => {
  try {
    const componentFiles = readdirSync(folder)
    return componentFiles.filter(isComponentFile)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`Warning: Could not read directory ${folder}:`, error.message)
    return []
  }
}

// Get definitions from file
const getFileDefinitions = absolutePath => {
  try {
    const definitions = parse(absolutePath)
    return definitions
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`Warning: Could not parse ${absolutePath}:`, error.message)
    return []
  }
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
export async function generateTypesDoc(forceAllOrSpecificComponent = false) {
  const startTime = Date.now()
  // eslint-disable-next-line no-console
  console.log('Types doc generating...')

  // Determine the correct components directory to use
  const componentsDir = join(parentPath, 'lib/src/components')

  // Handle different parameter types
  const isForceAll = forceAllOrSpecificComponent === true
  const specificComponent =
    typeof forceAllOrSpecificComponent === 'string' ? forceAllOrSpecificComponent : null

  // Get changed files if not forcing all and no specific component
  const changedFiles = isForceAll || specificComponent ? [] : getChangedFiles()

  if (!isForceAll && !specificComponent && changedFiles.length > 0) {
    // eslint-disable-next-line no-console
    console.log(`Found ${changedFiles.length} changed TypeScript files`)
  }

  if (specificComponent) {
    // eslint-disable-next-line no-console
    console.log(`Processing specific component: ${specificComponent}`)
  }

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

  let processedCount = 0
  let skippedCount = 0

  // Process components in parallel
  await Promise.all(
    componentDirs.map(async dirent => {
      const componentDir = resolve(componentsDir, dirent)
      const files = getComponentFiles(componentDir)

      if (files.length === 0) {
        skippedCount++
        return
      }

      // Skip if processing specific component and this is not it
      if (specificComponent && dirent !== specificComponent) {
        skippedCount++
        return
      }

      // Skip if no files changed in this component and properties.json is up to date
      if (
        !isForceAll &&
        !specificComponent &&
        !hasChangedFiles(componentDir, changedFiles) &&
        isPropertiesFileUpToDate(componentDir, files)
      ) {
        // eslint-disable-next-line no-console
        console.log(`Skipping ${dirent} (no changes detected)`)
        skippedCount++
        return
      }

      // Process all files in this component directory
      const allComponentProps = {}

      // Process files sequentially within each component
      for (const file of files) {
        const definitions = getFileDefinitions(`${componentDir}/${file}`)

        definitions.forEach(definition => {
          const { displayName, props, tags } = definition
          const name = tags?.name || displayName

          if (props && Object.keys(props).length > 0) {
            const sortedProps = Object.keys(props)
              .sort()
              .reduce((obj, key) => {
                obj[key] = props[key]
                return obj
              }, {})

            // Only add if the resulting props object is not empty
            if (Object.keys(sortedProps).length > 0) {
              allComponentProps[name] = {
                props: sortedProps,
                tag: tags?.tag,
              }
            }
          }
        })
      }

      // Write properties.json file only once per component
      if (!arePropsEmpty(allComponentProps)) {
        writePropsFile(componentDir, allComponentProps)
      }

      processedCount++
      // eslint-disable-next-line no-console
      console.log(`Processed ${dirent}`)
    })
  )

  const endTime = Date.now()
  // eslint-disable-next-line no-console
  console.log(`Types doc generation completed in ${((endTime - startTime) / 1000).toFixed(2)}s!`)
  // eslint-disable-next-line no-console
  console.log(`Processed: ${processedCount}, Skipped: ${skippedCount} components`)
}

// CLI interface
if (import.meta.url === `file://${process.argv[1]}`) {
  const forceAll = process.argv.includes('--all') || process.argv.includes('-a')

  if (forceAll) {
    // eslint-disable-next-line no-console
    console.log('Running on all components (--all flag detected)')
  } else {
    // eslint-disable-next-line no-console
    console.log('Running on changed files only. Use --all to process all components.')
  }

  generateTypesDoc(forceAll).catch(error => {
    // eslint-disable-next-line no-console
    console.error('Error generating types documentation:', error)
    process.exit(1)
  })
}
