import { readFileSync } from 'fs'
import { resolve } from 'path'

import { describe, expect, it } from 'vitest'

import { setupExternalMigrationTest } from '../helpers/test-setup.mjs'
import { migrateAll } from '../index.mjs'

describe('External Migration - Simple Styled Components', () => {
  // Don't perform cleanup for now so that we can inspect the migrated files
  const tempDir = setupExternalMigrationTest(
    'ExternalSimpleComponent-test',
    'ExternalSimpleComponent'
  )

  it('migrates simple styled components (styled.div, styled.button, etc.)', async () => {
    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'index.tsx'), 'utf8')
    const generatedScss = readFileSync(resolve(tempDir, 'styles.module.scss'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('simple-component.tsx')
    expect(generatedScss).toMatchSnapshot('simple-styles.module.scss')
  })
})
