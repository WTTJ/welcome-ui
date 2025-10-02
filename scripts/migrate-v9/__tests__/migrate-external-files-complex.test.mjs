import { readFileSync } from 'fs'
import { resolve } from 'path'

import { describe, expect, it } from 'vitest'

import { setupExternalMigrationTest } from '../helpers/test-setup.mjs'
import { migrateAll } from '../index.mjs'

describe('External Migration - Complex Styled Components', () => {
  const tempDir = setupExternalMigrationTest(
    'ExternalComplexComponent-test',
    'ExternalComplexComponent'
  )

  it('migrates complex styled components (styled(Component), template literals, interpolations)', async () => {
    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'index.tsx'), 'utf8')
    const generatedScss = readFileSync(resolve(tempDir, 'styles.scss'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('complex-component.tsx')
    expect(generatedScss).toMatchSnapshot('complex-styles.scss')
  })
})
