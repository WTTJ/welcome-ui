import { readFileSync } from 'fs'
import { resolve } from 'path'

import { beforeEach, describe, expect, it } from 'vitest'

import { copyDirSync, deleteDirRecursive } from '../helpers/file-utils.mjs'
import { migrateAll } from '../index.mjs'

describe('External Migration - Complex Styled Components', () => {
  // Manual setup without cleanup to inspect generated files
  const fixturesDir = resolve(
    import.meta.dirname,
    '..',
    '__tests__',
    '__fixtures__',
    'ExternalComplexComponent'
  )
  const tempDir = resolve(import.meta.dirname, '..', 'temp', 'ExternalComplexComponent-test')

  beforeEach(() => {
    // Clean up any existing temp directory and set up fresh copy
    deleteDirRecursive(tempDir)
    copyDirSync(fixturesDir, tempDir)
  })

  // Skip afterEach cleanup to inspect files

  it('migrates complex styled components (styled(Component), template literals, interpolations)', async () => {
    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'index.tsx'), 'utf8')
    const generatedScss = readFileSync(resolve(tempDir, 'styles.scss'), 'utf8')

    // Log the generated files for debugging
    // eslint-disable-next-line no-console
    console.log('=== GENERATED COMPONENT ===')
    // eslint-disable-next-line no-console
    console.log(migratedComponent)
    // eslint-disable-next-line no-console
    console.log('\n=== GENERATED SCSS ===')
    // eslint-disable-next-line no-console
    console.log(generatedScss)

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('complex-component.tsx')
    expect(generatedScss).toMatchSnapshot('complex-styles.scss')
  })
})
