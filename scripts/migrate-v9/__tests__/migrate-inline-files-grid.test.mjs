import { readFileSync } from 'fs'
import { resolve } from 'path'

import { describe, expect, it } from 'vitest'

import { setupMigrationTest } from '../helpers/test-setup.mjs'
import { migrateAll } from '../index.mjs'

describe('Inline Migration - Grid Components', () => {
  const tempDir = setupMigrationTest('inline-grid-test', '__fixtures__')

  it('migrates Grid components with layout props to div with classNames', async () => {
    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'GridComponent.tsx'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('grid-component.tsx')
  })
})
