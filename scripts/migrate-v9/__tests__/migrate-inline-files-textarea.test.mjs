import { readFileSync } from 'fs'
import { resolve } from 'path'

import { describe, expect, it } from 'vitest'

import { setupMigrationTest } from '../helpers/test-setup.mjs'
import { migrateAll } from '../index.mjs'

describe('Inline Migration - Textarea Components', () => {
  const tempDir = setupMigrationTest('inline-textarea-test', '__fixtures__')

  it('migrates Textarea components with styling props to Textarea with classNames', async () => {
    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'TextareaComponent.tsx'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('textarea-component.tsx')
  })
})
