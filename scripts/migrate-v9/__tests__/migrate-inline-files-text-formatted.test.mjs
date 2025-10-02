import { readFileSync } from 'fs'
import { resolve } from 'path'

import { describe, expect, it } from 'vitest'

import { setupMigrationTest } from '../helpers/test-setup.mjs'
import { migrateAll } from '../index.mjs'

describe('Inline Migration - Text Components', () => {
  const tempDir = setupMigrationTest('inline-text-formatted-test', '__fixtures__')

  it('migrates Text components containing FormattedMessage to span with classNames', async () => {
    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'TextComponent.tsx'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('text-component.tsx')
  })
})
