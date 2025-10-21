import { readFileSync } from 'fs'
import { resolve } from 'path'

import { describe, expect, it } from 'vitest'

import { setupMigrationTest } from '../helpers/test-setup.mjs'
import { migrateAll } from '../index.mjs'

describe('Inline Migration - Label Components', () => {
  const tempDir = setupMigrationTest('inline-label-test', '__fixtures__')

  it('migrates Label components with styling props to Label with classNames', async () => {
    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'LabelComponent.tsx'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('label-component.tsx')
  })
})
