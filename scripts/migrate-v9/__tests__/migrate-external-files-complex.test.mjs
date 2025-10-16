import { readFileSync } from 'fs'
import { resolve } from 'path'

import { beforeEach, describe, expect, it } from 'vitest'

import { copyDirSync, deleteDirRecursive } from '../helpers/file-utils.mjs'
import { setupExternalMigrationTest } from '../helpers/test-setup.mjs'
import { migrateAll } from '../index.mjs'

describe('External Migration - Complex Styled Components', () => {
  // Don't perform cleanup for now so that we can inspect the migrated files
  const tempDir = setupExternalMigrationTest(
    'ExternalComplexComponent-test',
    'ExternalComplexComponent'
  )

  const fixturesDir = resolve(
    __dirname,
    '..',
    '__tests__',
    '__fixtures__',
    'ExternalComplexComponent'
  )

  beforeEach(() => {
    // Clean up any existing temp directory and set up fresh copy
    deleteDirRecursive(tempDir)
    copyDirSync(fixturesDir, tempDir)
  })

  it('migrates complex styled components (styled(Component), template literals, interpolations)', async () => {
    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'index.tsx'), 'utf8')
    const generatedScss = readFileSync(resolve(tempDir, 'styles.module.scss'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('complex-component.tsx')
    expect(generatedScss).toMatchSnapshot('complex-styles.module.scss')
  })
})
