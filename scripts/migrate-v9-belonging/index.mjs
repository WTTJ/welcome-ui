/* eslint-disable perfectionist/sort-imports */
/* eslint-disable perfectionist/sort-named-exports */
/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-modules */
/* eslint-disable no-console */

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

/**
 * Configuration: Array of components to migrate with their transformation scripts
 * Each entry specifies:
 * - components: The component name to look for (e.g., 'Text', 'Tag') or array of names
 * - script: The transformation script module to use (e.g., './transform-text.mjs')
 */
const MIGRATION_CONFIG = [
  // { components: 'Avatar', script: './transform-avatar.mjs' },
  // { components: 'Badge', script: './transform-badge.mjs' },
  // { components: 'Button', script: './transform-button.mjs' },
  // {
  //   components: ['InputText', 'DatePicker', 'DateTimePicker'],
  //   script: './transform-inputText.mjs',
  // },
  // {
  //   components: 'Swiper',
  //   script: './transform-swiper.mjs',
  // },
  // {
  //   component: 'Text',
  //   script: './transform-text.mjs',
  // },
  // {
  //   components: 'Tooltip',
  //   script: './transform-tooltip.mjs',
  // },
]

/**
 * Recursively walk a directory and apply a callback to each file.
 * @param {string} dir - Directory to walk
 * @param {(filePath: string) => void} fileCallback - Callback for each file
 */
function walkDirectory(dir, fileCallback) {
  // Skip node_modules and other common directories
  const skipDirs = ['node_modules', '.git', 'dist', 'build', '.next']

  try {
    const files = fs.readdirSync(dir)
    files.forEach(file => {
      const filePath = path.join(dir, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        if (!skipDirs.includes(file)) {
          walkDirectory(filePath, fileCallback)
        }
      } else {
        fileCallback(filePath)
      }
    })
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message)
  }
}

/**
 * Check if a file is a TypeScript or TypeScript React file
 * @param {string} filePath - Path to the file
 * @returns {boolean} - True if file should be processed
 */
function isTypeScriptFile(filePath) {
  const ext = path.extname(filePath)
  return ext === '.ts' || ext === '.tsx'
}

/**
 * Find all occurrences of specified components in a file
 * @param {string} filePath - Path to the file to search
 * @param {string[]} componentNames - Array of component names to search for
 * @returns {Object} - Map of component names to their occurrence count
 */
function findComponentsInFile(filePath, componentNames) {
  const content = fs.readFileSync(filePath, 'utf8')
  const found = {}

  componentNames.forEach(componentName => {
    // Look for component usage patterns like <Text, <Text>, {Text}
    const patterns = [
      new RegExp(`<${componentName}[\\s/>]`, 'g'),
      new RegExp(`<${componentName}\\.`, 'g'), // For Text.h1, etc.
    ]

    let count = 0
    patterns.forEach(pattern => {
      const matches = content.match(pattern)
      if (matches) {
        count += matches.length
      }
    })

    if (count > 0) {
      found[componentName] = count
    }
  })

  return found
}

/**
 * Apply a transformation script to a file
 * @param {string} filePath - Path to the file to transform
 * @param {string} componentName - Name of the component being transformed
 * @param {Object} transformModule - The imported transformation module
 * @returns {boolean} - True if file was modified
 */
async function applyTransformation(filePath, componentName, transformModule) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')

    // The transform module should export a transform function
    if (typeof transformModule.transform === 'function') {
      const result = await transformModule.transform(content, filePath, componentName)

      if (result && result.modified) {
        fs.writeFileSync(filePath, result.content, 'utf8')
        return true
      }
    } else {
      console.warn(`Transform module for ${componentName} does not export a 'transform' function`)
    }

    return false
  } catch (error) {
    console.error(`Error transforming ${filePath}:`, error.message)
    return false
  }
}

/**
 * Main migration function
 * @param {string} searchDirectory - Directory to search for files
 * @param {boolean} dryRun - If true, only report what would be changed
 */
async function migrate(searchDirectory, dryRun = true) {
  console.log(`🔍 Scanning ${searchDirectory} for TypeScript files...`)
  console.log(`Mode: ${dryRun ? 'DRY RUN (no changes will be made)' : 'APPLY CHANGES'}`)
  console.log()

  // Load all transformation modules (supporting single or multiple components per entry)
  const transformers = {}
  for (const config of MIGRATION_CONFIG) {
    const names = Array.isArray(config.components)
      ? config.components
      : [config.components || config.component]
    for (const name of names) {
      try {
        transformers[name] = await import(config.script)
        console.log(`✅ Loaded transformation script for ${name}`)
      } catch (error) {
        console.error(`❌ Failed to load transformation script for ${name}:`, error.message)
      }
    }
  }
  console.log()

  // Flatten component names for matching usages
  const componentNames = MIGRATION_CONFIG.flatMap(c =>
    Array.isArray(c.components) ? c.components : [c.components || c.component]
  )
  const filesWithComponents = []

  // Walk directory and find all files with target components
  walkDirectory(searchDirectory, filePath => {
    if (!isTypeScriptFile(filePath)) {
      return
    }

    const foundComponents = findComponentsInFile(filePath, componentNames)

    if (Object.keys(foundComponents).length > 0) {
      filesWithComponents.push({
        path: filePath,
        components: foundComponents,
      })
    }
  })

  console.log(`📊 Found ${filesWithComponents.length} files with target components\n`)

  // Report findings
  const stats = {}
  componentNames.forEach(name => {
    stats[name] = { files: 0, occurrences: 0 }
  })

  filesWithComponents.forEach(file => {
    Object.entries(file.components).forEach(([component, count]) => {
      stats[component].files++
      stats[component].occurrences += count
    })
  })

  console.log('Component statistics:')
  Object.entries(stats).forEach(([component, data]) => {
    console.log(`  ${component}: ${data.occurrences} occurrences in ${data.files} files`)
  })
  console.log()

  // Apply transformations if not in dry run mode
  if (!dryRun) {
    console.log('🔄 Applying transformations...\n')

    let modifiedCount = 0

    for (const file of filesWithComponents) {
      let fileModified = false
      // Apply each configured script once if any of its components appear
      for (const config of MIGRATION_CONFIG) {
        // Normalize to array of names
        const names = Array.isArray(config.components)
          ? config.components
          : [config.components || config.component]
        // Check if file uses any of these component names
        const foundName = names.find(name => file.components[name])
        if (!foundName) continue
        const transformer = transformers[foundName]
        if (transformer) {
          const wasModified = await applyTransformation(file.path, foundName, transformer)
          if (wasModified) fileModified = true
        }
      }

      if (fileModified) {
        modifiedCount++
        console.log(`✏️  Modified: ${file.path}`)
        try {
          execSync(`npx prettier --write "${file.path}"`, { stdio: 'inherit' })
          console.log(`🔧 Prettier formatted: ${file.path}`)
        } catch (err) {
          console.warn(`⚠️  Prettier failed on ${file.path}:`, err.message)
        }
        try {
          execSync(`npx eslint --fix "${file.path}"`, { stdio: 'inherit' })
          console.log(`🔧 ESLint fixed: ${file.path}`)
        } catch (err) {
          console.warn(`⚠️  ESLint failed on ${file.path}:`, err.message)
        }
      }
    }

    console.log()
    console.log(`✅ Migration complete! Modified ${modifiedCount} files.`)
  } else {
    console.log('ℹ️  Dry run complete. Use --apply flag to make changes.')
  }
}

/**
 * CLI entry point
 */
async function main() {
  const searchDirectory = process.argv[2] || './lib/src'
  const shouldApply = process.argv.includes('--apply')

  try {
    await migrate(searchDirectory, !shouldApply)
  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

// If run directly from CLI, execute main
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export { migrate, walkDirectory, findComponentsInFile, applyTransformation }
