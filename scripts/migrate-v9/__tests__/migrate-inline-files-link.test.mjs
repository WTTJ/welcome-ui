import { readFileSync } from 'fs'
import { resolve } from 'path'

import { describe, expect, it } from 'vitest'

import { setupMigrationTest } from '../helpers/test-setup.mjs'
import { migrateAll } from '../index.mjs'

describe('Inline Migration - Link Components', () => {
  const tempDir = setupMigrationTest('inline-link-test', '__fixtures__')

  it('migrates Link components with styling props to Link with classNames', async () => {
    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'LinkComponent.tsx'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('link-component.tsx')
  })
})
