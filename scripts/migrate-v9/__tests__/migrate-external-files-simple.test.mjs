import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { describe, expect, it } from 'vitest'

import { copyDirSync, deleteDirRecursive } from '../helpers/file-utils.mjs'
import { migrateAll } from '../index.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))

describe('External Migration - Simple Styled Components', () => {
  it('migrates simple styled components (styled.div, styled.button, etc.)', async () => {
    const fixturesDir = resolve(__dirname, './__fixtures__/ExternalSimpleComponent')
    const tempDir = resolve(__dirname, '../temp/ExternalSimpleComponent-test')

    // Clean up and copy fixtures
    deleteDirRecursive(tempDir)
    copyDirSync(fixturesDir, tempDir)

    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'index.tsx'), 'utf8')
    const generatedScss = readFileSync(resolve(tempDir, 'styles.scss'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('simple-component.tsx')
    expect(generatedScss).toMatchSnapshot('simple-styles.scss')

    // Cleanup
    deleteDirRecursive(tempDir)
  })
})
