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
 * @param {boolean} options.recursive - Whether to scan subdirectories for component files (default: true)
 */
export async function migrateAll(directory, options = {}) {
  const {
    copyDir = false,
    format = true,
    interactive = false,
    recursive = true,
    verbose = false,
  } = options

  console.log('🚀 Starting unified migration...')
  console.log(`📁 Directory: ${directory}`)
  console.log(`🔧 Options: ${JSON.stringify(options, null, 2)}`)

  let workingDir = directory

  // Step 1: Handle directory copying and external styled components migration
  if (hasExternalStyledComponents(directory)) {
    console.log('\n📦 External styled components detected!')
    console.log('🔄 Running external migration (S.Menu -> div.menu)...')

    // This will handle directory copying and external component migration
    await migrateExternal(directory, copyDir, recursive)

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
  const noRecursive = process.argv.includes('--no-recursive')
  const showHelp = process.argv.includes('--help') || process.argv.includes('-h')

  if (!directory || showHelp) {
    console.info('Welcome UI v9 Migration Script')
    console.info('===============================')
    console.info('')
    console.info('Usage: yarn migrate:v9 <directory> [options]')
    console.info('')
    console.info('Arguments:')
    console.info('  <directory>     Path to the component directory to migrate')
    console.info('')
    console.info('Options:')
    console.info('  --copy          Create a backup copy before migration (adds -Migrated suffix)')
    console.info('                  Default: Migrate files in place')
    console.info('')
    console.info('  --interactive   Enable interactive prompts to review each change')
    console.info('                  Default: Non-interactive mode')
    console.info('')
    console.info('  --verbose       Show detailed output during migration')
    console.info('                  Default: Show minimal output')
    console.info('')
    console.info('  --no-format     Skip final Prettier, ESLint, and Stylelint formatting')
    console.info('                  Default: Formatting enabled')
    console.info('')
    console.info('  --no-recursive  Only migrate files in target directory, not subdirectories')
    console.info('                  Default: Recursively scan all subdirectories')
    console.info('')
    console.info('What gets migrated:')
    console.info('  • External styled components: <S.Menu /> → <div className={cx("menu")} />')
    console.info('  • Inline styled components:   <Box mt="sm" /> → <div className="mt-sm" />')
    console.info('  • CSS files:                   styles.ts → styles.module.scss')
    console.info('')
    console.info('Examples:')
    console.info('  # Basic migration (in place, with formatting)')
    console.info('  node index.mjs ./src/components/MyComponent')
    console.info('')
    console.info('  # Create backup copy before migrating')
    console.info('  node index.mjs ./src/components/MyComponent --copy')
    console.info('')
    console.info('  # Review each change interactively')
    console.info('  node index.mjs ./src/components/MyComponent --interactive')
    console.info('')
    console.info('  # Only migrate root directory files')
    console.info('  node index.mjs ./src/components/MyComponent --no-recursive')
    console.info('')
    console.info('  # Combine multiple options')
    console.info('  node index.mjs ./src/components/MyComponent --copy --verbose --interactive')
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
      recursive: !noRecursive,
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
