import fs from 'fs'
import path from 'path'
import readline from 'readline'

import { walkDirectory } from './file-ops.mjs'
import { processComponents } from './process-components.mjs'
import { processFile } from './process-file.mjs'

// Create readline interface for user input for interactive CLI
export const userInputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

/**
 * Find all Box/Flex/Grid/Stack (and related) component usages in a directory tree.
 * Returns an array of found component usages with their props and file info.
 */
export function findAllComponentUsages(directory) {
  // Build whitelist of component root names from lib/src/components
  const componentsDir = path.resolve('lib/src/components')
  const whitelist = new Set(
    fs
      .readdirSync(componentsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
  )

  // Always include COMPONENTS_TO_REPLACE in the whitelist
  const COMPONENTS_TO_REPLACE = ['Box', 'Flex', 'Grid', 'Stack']
  COMPONENTS_TO_REPLACE.forEach(name => whitelist.add(name))

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
