/* eslint-disable no-console */
import fs from 'fs'
import path from 'path'

import { copyDirSync, deleteDirRecursive } from './helpers/file-utils.mjs'
import { formatDirectory } from './helpers/format-final.mjs'
import { processComponents } from './helpers/process-components.mjs'
import { migrate as migrateExternal } from './migrate-external-files.mjs'
import { findAllComponentUsages } from './migrate-inline-files.mjs'

/**
 * Unified migration script that handles both external styled components
 * (S.Menu -> div.menu) and inline styled components (Box mt="sm" -> div.mt-sm)
 *
 * @param {string} directory - Directory to migrate
 * @param {object} options - Migration options
 * @param {boolean} options.copyDir - Whether to copy directory before migration (default: true)
 * @param {boolean} options.interactive - Whether to run in interactive mode (default: true)
 * @param {boolean} options.verbose - Whether to show verbose output (default: false)
 * @param {boolean} options.format - Whether to run final Prettier/ESLint formatting (default: true)
 */
export async function migrateAll(directory, options = {}) {
  const { copyDir = false, format = true, interactive = false, verbose = false } = options

  console.log('🚀 Starting unified migration...')
  console.log(`📁 Directory: ${directory}`)
  console.log(`🔧 Options: ${JSON.stringify(options, null, 2)}`)

  let workingDir = directory

  // Step 1: Handle directory copying and external styled components migration
  if (hasExternalStyledComponents(directory)) {
    console.log('\n📦 External styled components detected!')
    console.log('🔄 Running external migration (S.Menu -> div.menu)...')

    // This will handle directory copying and external component migration
    await migrateExternal(directory, copyDir)

    // Update working directory if we copied
    if (copyDir) {
      const parent = path.dirname(directory)
      const base = path.basename(directory)
      workingDir = path.join(parent, base + '-Migrated')
    }
  } else if (copyDir) {
    // Copy directory even if no external styled components
    const parent = path.dirname(directory)
    const base = path.basename(directory)
    const dest = path.join(parent, base + '-Migrated')

    if (fs.existsSync(dest)) {
      console.log(`Destination directory already exists, deleting: ${dest}`)
      deleteDirRecursive(dest)
    }
    copyDirSync(directory, dest)
    workingDir = dest
    console.log(`📋 Copied ${directory} to ${dest}`)
  }

  // Step 2: Handle inline styled components migration
  console.log('\n🎨 Searching for inline styled components (Box, Flex, Grid, Stack)...')
  const components = findAllComponentUsages(workingDir)

  if (components.length > 0) {
    console.log(`✨ Found ${components.length} inline styled component(s)`)
    console.log('🔄 Running inline migration (Box mt="sm" -> div.mt-sm)...')

    await processComponents(components, interactive, verbose)
  } else {
    console.log('ℹ️  No inline styled components found')
  }

  // Step 3: Run final formatting with Prettier and ESLint
  if (format) {
    await formatDirectory(workingDir)
  }

  console.log('\n✅ Migration complete!')
  console.log(`📁 Migrated files are in: ${workingDir}`)

  return workingDir
}

/**
 * Check if a directory contains external styled components (styles.ts file)
 */
function hasExternalStyledComponents(directory) {
  const stylesTs = path.join(directory, 'styles.ts')
  return fs.existsSync(stylesTs)
}

// CLI usage
async function main() {
  const directory = process.argv[2]
  const copy = process.argv.includes('--copy')
  const interactive = process.argv.includes('--interactive')
  const verbose = process.argv.includes('--verbose')
  const noFormat = process.argv.includes('--no-format')

  if (!directory) {
    console.error(
      'Usage: node index.mjs <directory> [--copy] [--interactive] [--verbose] [--no-format]'
    )
    console.error('')
    console.error('Options:')
    console.error('  --copy          Migrate files using a backup copy')
    console.error('  --interactive   Enable interactive prompts')
    console.error('  --verbose       Show detailed output')
    console.error('  --no-format     Skip final Prettier and ESLint formatting')
    console.error('')
    console.error('Examples:')
    console.error('  node index.mjs ./src/components/MyComponent')
    console.error('  node index.mjs ./src/pages/Login --interactive')
    console.error('  node index.mjs ./src --copy --verbose')
    process.exit(1)
  }

  if (!fs.existsSync(directory)) {
    console.error(`❌ Directory not found: ${directory}`)
    process.exit(1)
  }

  try {
    await migrateAll(directory, {
      copyDir: copy,
      format: !noFormat,
      interactive,
      verbose,
    })
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// If run directly from CLI, execute main
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
