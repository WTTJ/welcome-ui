/**
 * Filter an array of file paths to exclude test and story files
 * @param {string[]} files - Array of file paths
 * @returns {string[]} - Filtered array
 */
export function filterMigrationFiles(files) {
  return files.filter(file => !shouldExcludeFile(file))
}

/**
 * Check if a file should be excluded from migration
 * Excludes test and story files
 * @param {string} filePath - The file path to check
 * @returns {boolean} - True if the file should be excluded
 */
export function shouldExcludeFile(filePath) {
  return (
    filePath.endsWith('.test.ts') ||
    filePath.endsWith('.test.tsx') ||
    filePath.endsWith('.test.js') ||
    filePath.endsWith('.test.jsx') ||
    filePath.endsWith('.stories.ts') ||
    filePath.endsWith('.stories.tsx') ||
    filePath.endsWith('.stories.js') ||
    filePath.endsWith('.stories.jsx')
  )
}
