import { readFileSync } from 'fs'
import { resolve } from 'path'

import { describe, expect, it } from 'vitest'

import { setupMigrationTest } from '../helpers/test-setup.mjs'
import { migrateAll } from '../index.mjs'

describe('Inline Migration - Breadcrumb Components', () => {
  const tempDir = setupMigrationTest('inline-breadcrumb-test', '__fixtures__')

  it('migrates Breadcrumb components with styling props to Breadcrumb with classNames', async () => {
    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'BreadcrumbComponent.tsx'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('breadcrumb-component.tsx')
  })
})
