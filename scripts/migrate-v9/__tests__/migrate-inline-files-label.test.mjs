import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { describe, expect, it } from 'vitest'

import { copyDirSync, deleteDirRecursive } from '../helpers/file-utils.mjs'
import { migrateAll } from '../index.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))

describe('Inline Migration - Label Components', () => {
  it('migrates Label components with form props to Label with classNames', async () => {
    const fixturesDir = resolve(__dirname, './__fixtures__')
    const tempDir = resolve(__dirname, '../temp/inline-label-test')

    // Clean up and copy fixtures
    deleteDirRecursive(tempDir)
    copyDirSync(fixturesDir, tempDir)

    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'LabelComponent.tsx'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('label-component.tsx')

    // Cleanup
    deleteDirRecursive(tempDir)
  })
})
