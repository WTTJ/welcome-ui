/* eslint-disable no-console */
import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

import { glob } from 'glob'

import { filterMigrationFiles } from './file-filters.mjs'

const execAsync = promisify(exec)

/**
 * Run Prettier, ESLint --fix, and Stylelint on all files in a directory
 * @param {string} directory - Directory to format
 */
export async function formatDirectory(directory) {
  console.log('\n🎨 Running final formatting...')

  // Check for TypeScript/JavaScript files (excluding test and story files)
  const allTsFiles = await glob(`${directory}/**/*.{ts,tsx,js,jsx}`, { nodir: true })
  const tsFiles = filterMigrationFiles(allTsFiles)
  const hasTypeScriptFiles = tsFiles.length > 0

  // Check for SCSS/CSS files
  const scssFiles = await glob(`${directory}/**/*.{scss,css}`, { nodir: true })
  const hasScssFiles = scssFiles.length > 0

  if (!hasTypeScriptFiles && !hasScssFiles) {
    console.log('  ℹ️  No files to format found')
    return
  }

  // Check if we're formatting an external directory (outside welcome-ui repo)
  const resolvedDir = path.resolve(directory)
  const welcomeUiRoot = process.cwd()
  const isExternalRepo = !resolvedDir.startsWith(welcomeUiRoot)

  // For external repos, find the repo root to use its ESLint config
  let targetRepoRoot = resolvedDir
  if (isExternalRepo) {
    targetRepoRoot = findRepoRoot(resolvedDir)
    console.log(`  📁 Using ESLint config from: ${targetRepoRoot}`)
  }

  // Run Prettier on TypeScript/JavaScript files
  if (hasTypeScriptFiles) {
    try {
      console.log(`  ⏳ Running Prettier on ${tsFiles.length} TS/JS file(s)...`)
      const tsFilePaths = tsFiles.map(f => `"${f}"`).join(' ')
      const { stderr } = await execAsync(`prettier --write ${tsFilePaths}`, {
        cwd: process.cwd(),
      })
      if (stderr) console.log(stderr)
      console.log(`  ✅ Prettier (TS/JS) completed - ${tsFiles.length} file(s) formatted`)
    } catch (error) {
      console.warn('  ⚠️  Prettier had some issues (this is usually okay):', error.message)
    }
  }

  // Run Prettier on SCSS files
  if (hasScssFiles) {
    try {
      console.log(`  ⏳ Running Prettier on ${scssFiles.length} SCSS file(s)...`)
      const scssFilePaths = scssFiles.map(f => `"${f}"`).join(' ')
      const { stderr } = await execAsync(`prettier --write ${scssFilePaths}`, {
        cwd: process.cwd(),
      })
      if (stderr) console.log(stderr)
      console.log(`  ✅ Prettier (SCSS) completed - ${scssFiles.length} file(s) formatted`)
    } catch (error) {
      console.warn('  ⚠️  Prettier (SCSS) had some issues (this is usually okay):', error.message)
    }

    try {
      // Run Stylelint --fix on SCSS files
      console.log(`  ⏳ Running Stylelint --fix on ${scssFiles.length} SCSS file(s)...`)
      const scssFilePaths = scssFiles.map(f => `"${f}"`).join(' ')
      // For external repos, use --disable-default-ignores to bypass ignore patterns
      const { stderr } = await execAsync(
        `stylelint --fix --disable-default-ignores ${scssFilePaths}`,
        {
          cwd: process.cwd(),
        }
      )
      if (stderr) console.log(stderr)
      console.log(`  ✅ Stylelint --fix completed - ${scssFiles.length} file(s) linted`)
    } catch (error) {
      console.warn('  ⚠️  Stylelint had some issues (this is usually okay):', error.message)
    }
  }

  // Run ESLint --fix on TypeScript/JavaScript files
  if (hasTypeScriptFiles) {
    try {
      console.log(`  ⏳ Running ESLint --fix on ${tsFiles.length} TS/JS file(s)...`)

      // This allows ESLint to find and use the target repo's config
      const relativeFiles = tsFiles.map(f => path.relative(targetRepoRoot, f))
      const { stderr } = await execAsync(
        `${process.cwd()}/node_modules/.bin/eslint --fix ${relativeFiles.map(f => `"${f}"`).join(' ')}`,
        {
          cwd: targetRepoRoot,
        }
      )
      if (stderr) console.log(stderr)

      console.log(`  ✅ ESLint --fix completed - ${tsFiles.length} file(s) linted`)
    } catch (error) {
      console.warn('  ⚠️  ESLint had some issues (this is usually okay):', error.message)
    }
  }

  console.log('✅ Final formatting complete!')
}

/**
 * Find the root directory of the target repo by looking for package.json or ESLint config
 */
function findRepoRoot(startDir) {
  let currentDir = startDir

  while (currentDir !== path.parse(currentDir).root) {
    // Check for package.json (most common repo root indicator)
    if (fs.existsSync(path.join(currentDir, 'package.json'))) {
      return currentDir
    }

    // Check for ESLint config files
    const eslintConfigs = [
      'eslint.config.js',
      'eslint.config.mjs',
      'eslint.config.cjs',
      '.eslintrc.js',
      '.eslintrc.cjs',
      '.eslintrc.json',
      '.eslintrc',
    ]

    if (eslintConfigs.some(config => fs.existsSync(path.join(currentDir, config)))) {
      return currentDir
    }

    // Move up one directory
    currentDir = path.dirname(currentDir)
  }

  // If no root found, return the original directory
  return startDir
}
