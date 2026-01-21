/* eslint-disable no-console */
import fs from 'fs/promises'
import path from 'path'

// Configuration
const CONFIG = {
  // File extensions to process
  extensions: ['.css', '.scss', '.sass', '.jsx', '.js', '.tsx', '.ts', '.html', '.vue'],

  // Directories to ignore
  ignoredDirs: ['node_modules', '.git', 'dist', 'build', '.next', 'coverage'],

  // Replacement patterns
  replacements: [
    {
      description: 'components-dimensions',
      pattern: /--components-dimensions-/g,
      replacement: '--',
    },
    {
      description: 'components-colors',
      pattern: /--components-colors-/g,
      replacement: '--',
    },
  ],
}

// Statistics
const stats = {
  filesModified: 0,
  filesProcessed: 0,
  replacementsByType: {},
  totalReplacements: 0,
}

/**
 * Applies replacements to file content
 */
function applyReplacements(content) {
  let modifiedContent = content
  let fileHasChanges = false
  const fileReplacements = {}

  CONFIG.replacements.forEach(({ description, pattern, replacement }) => {
    const matches = modifiedContent.match(pattern)
    if (matches) {
      const count = matches.length
      modifiedContent = modifiedContent.replace(pattern, replacement)
      fileHasChanges = true
      fileReplacements[description] = count

      if (!stats.replacementsByType[description]) {
        stats.replacementsByType[description] = 0
      }
      stats.replacementsByType[description] += count
      stats.totalReplacements += count
    }
  })

  return {
    content: modifiedContent,
    hasChanges: fileHasChanges,
    replacements: fileReplacements,
  }
}

/**
 * Displays the final report
 */
function displayReport() {
  console.log('\n' + '='.repeat(60))
  console.log('📊 MIGRATION REPORT')
  console.log('='.repeat(60))
  console.log(`Files processed: ${stats.filesProcessed}`)
  console.log(`Files modified: ${stats.filesModified}`)
  console.log(`Total replacements: ${stats.totalReplacements}`)
  console.log('\nBreakdown by type:')
  Object.entries(stats.replacementsByType).forEach(([type, count]) => {
    console.log(`  - ${type}: ${count} replacement(s)`)
  })
  console.log('='.repeat(60) + '\n')
}

/**
 * Main function
 */
async function main() {
  const startPath = process.argv[2] || '.'
  const absolutePath = path.resolve(startPath)

  console.log('🚀 Starting CSS tokens migration')
  console.log(`📁 Target directory: ${absolutePath}`)
  console.log(`📝 Processed extensions: ${CONFIG.extensions.join(', ')}`)
  console.log('\n' + '='.repeat(60) + '\n')

  // Check if directory exists
  try {
    await fs.access(absolutePath)
  } catch {
    console.error(`❌ Directory "${absolutePath}" does not exist`)
    process.exit(1)
  }

  // Process files
  await processDirectory(absolutePath)

  // Final report
  displayReport()

  console.log('✨ Migration completed successfully!')
}

/**
 * Recursively processes a directory
 */
async function processDirectory(dirPath) {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name)

      if (entry.isDirectory()) {
        if (!shouldIgnoreDir(entry.name)) {
          await processDirectory(fullPath)
        }
      } else if (entry.isFile()) {
        if (shouldProcessFile(fullPath)) {
          await processFile(fullPath)
        }
      }
    }
  } catch (error) {
    console.error(`✗ Error processing directory ${dirPath}:`, error.message)
  }
}

/**
 * Processes a single file
 */
async function processFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8')
    const { content: modifiedContent, hasChanges, replacements } = applyReplacements(content)

    stats.filesProcessed++

    if (hasChanges) {
      await fs.writeFile(filePath, modifiedContent, 'utf-8')
      stats.filesModified++

      console.log(`✓ ${filePath}`)
      Object.entries(replacements).forEach(([type, count]) => {
        console.log(`  → ${count} replacement(s) of type "${type}"`)
      })
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message)
  }
}

/**
 * Checks if a directory should be ignored
 */
function shouldIgnoreDir(dirName) {
  return CONFIG.ignoredDirs.includes(dirName)
}

/**
 * Checks if a file should be processed
 */
function shouldProcessFile(filePath) {
  const ext = path.extname(filePath)
  return CONFIG.extensions.includes(ext)
}

// Execute
main().catch(error => {
  console.error('❌ Fatal error:', error)
  process.exit(1)
})
