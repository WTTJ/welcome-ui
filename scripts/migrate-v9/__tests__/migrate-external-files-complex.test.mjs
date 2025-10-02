import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { describe, expect, it } from 'vitest'

import { copyDirSync, deleteDirRecursive } from '../helpers/file-utils.mjs'
import { migrateAll } from '../index.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))

describe('External Migration - Complex Styled Components', () => {
  it('migrates complex styled components (styled(Component), template literals, interpolations)', async () => {
    const fixturesDir = resolve(__dirname, './__fixtures__/ExternalComplexComponent')
    const tempDir = resolve(__dirname, '../temp/ExternalComplexComponent-test')

    // Clean up and copy fixtures
    deleteDirRecursive(tempDir)
    copyDirSync(fixturesDir, tempDir)

    // Run migration
    await migrateAll(tempDir, { copyDir: false, interactive: false })

    // Read results
    const migratedComponent = readFileSync(resolve(tempDir, 'index.tsx'), 'utf8')
    const generatedScss = readFileSync(resolve(tempDir, 'styles.scss'), 'utf8')

    // Verify with snapshots
    expect(migratedComponent).toMatchSnapshot('complex-component.tsx')
    expect(generatedScss).toMatchSnapshot('complex-styles.scss')

    // Cleanup
    deleteDirRecursive(tempDir)
  })
})
