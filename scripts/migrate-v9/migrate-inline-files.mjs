import fs from 'fs'
import path from 'path'
import readline from 'readline'

import { walkDirectory } from './helpers/file-ops.mjs'
import { processComponents } from './helpers/process-components.mjs'
import { processFile } from './helpers/process-file.mjs'

// Create readline interface for user input for interactive CLI
export const userInputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// Cache for component whitelist to avoid recreating it
let cachedWhitelist = null
let cachedDirectory = null

/**
 * Find all Box/Flex/Grid/Stack (and related) component usages in a directory tree.
 * Returns an array of found component usages with their props and file info.
 */
export function findAllComponentUsages(directory) {
  // Return cached whitelist if we've already processed this directory
  if (cachedDirectory === directory && cachedWhitelist) {
    const results = []
    walkDirectory(directory, filePath => processFile(filePath, results, cachedWhitelist))
    return results
  }

  // Build whitelist from the actual welcome-ui project components directory
  // This ensures we always have the complete list of available components
  const scriptDir = path.dirname(new URL(import.meta.url).pathname)
  const welcomeUiComponentsDir = path.resolve(scriptDir, '../../lib/src/components')

  let whitelist = new Set()
  try {
    if (
      fs.existsSync(welcomeUiComponentsDir) &&
      fs.statSync(welcomeUiComponentsDir).isDirectory()
    ) {
      whitelist = new Set(
        fs
          .readdirSync(welcomeUiComponentsDir, { withFileTypes: true })
          .filter(dirent => dirent.isDirectory())
          .map(dirent => dirent.name)
      )
    }
  } catch {
    // If we can't read the welcome-ui components directory, continue with empty whitelist
  }

  // Always include COMPONENTS_TO_REPLACE in the whitelist
  const COMPONENTS_TO_REPLACE = ['Box', 'Flex', 'Grid', 'Stack']
  COMPONENTS_TO_REPLACE.forEach(name => whitelist.add(name))

  // Cache the whitelist for this directory
  cachedWhitelist = whitelist
  cachedDirectory = directory

  const results = []
  // Recursively walk all files in the directory and process each file, passing whitelist
  walkDirectory(directory, filePath => processFile(filePath, results, whitelist))
  return results
}

// Entrypoint for CLI usage: parse args, find components, and process them
async function main() {
  const searchDirectory = process.argv[2] || './src'
  const shouldReplace = process.argv[3] === '--replace'

  const components = findAllComponentUsages(searchDirectory)
  await processComponents(components, shouldReplace)
}

// If run directly from CLI, execute main
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    // eslint-disable-next-line no-console
    console.error('Script failed:', error)
    userInputInterface.close()
    process.exit(1)
  })
}
