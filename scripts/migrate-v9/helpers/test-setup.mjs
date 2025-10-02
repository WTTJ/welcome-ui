import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { afterEach, beforeEach } from 'vitest'

import { copyDirSync, deleteDirRecursive } from './file-utils.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))

/**
 * Setup helper for complex external migration tests
 * @param {string} testName - Name for the temp directory
 * @param {string} fixturesDirName - Name of the fixtures directory
 * @returns {string} - The temp directory path
 */
export function setupExternalMigrationTest(testName, fixturesDirName) {
  const fixturesDir = resolve(__dirname, '..', '__tests__', '__fixtures__', fixturesDirName)
  const tempDir = resolve(__dirname, '..', 'temp', testName)

  beforeEach(() => {
    // Clean up any existing temp directory and set up fresh copy
    deleteDirRecursive(tempDir)
    copyDirSync(fixturesDir, tempDir)
  })

  afterEach(() => {
    // Always cleanup temp directory after each test
    deleteDirRecursive(tempDir)
  })

  return tempDir
}

/**
 * Setup helper for migration tests that creates and cleans up temp directories
 * @param {string} testName - Name for the temp directory (e.g., 'inline-button-test')
 * @param {string} fixturesPath - Path to fixtures directory relative to __tests__
 * @returns {string} - The temp directory path
 */
export function setupMigrationTest(testName, fixturesPath) {
  const fixturesDir = resolve(__dirname, '..', '__tests__', fixturesPath)
  const tempDir = resolve(__dirname, '..', 'temp', testName)

  beforeEach(() => {
    // Clean up any existing temp directory and set up fresh copy
    deleteDirRecursive(tempDir)
    copyDirSync(fixturesDir, tempDir)
  })

  afterEach(() => {
    // Always cleanup temp directory after each test
    deleteDirRecursive(tempDir)
  })

  return tempDir
}
