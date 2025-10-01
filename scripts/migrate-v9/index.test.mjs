import fs from 'fs'
import os from 'os'
import path from 'path'

import { describe, expect, it } from 'vitest'

import { deleteDirRecursive } from './helpers/file-utils.mjs'
import { migrateAll } from './index.mjs'

describe('Unified Migration', () => {
  it('handles directory with no styled components', async () => {
    // Setup temp directory with a regular component (no styles)
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wui-unified-test-empty-'))
    const currentDir = path.dirname(new URL(import.meta.url).pathname)
    const fixtureFile = path.resolve(currentDir, '__fixtures__/RegularComponent.tsx')

    fs.mkdirSync(tmpDir, { recursive: true })
    fs.copyFileSync(fixtureFile, path.join(tmpDir, 'RegularComponent.tsx'))

    // Get original content for comparison
    const originalContent = fs.readFileSync(fixtureFile, 'utf8')

    // Run unified migration
    const result = await migrateAll(tmpDir, { copyDir: false, interactive: false, verbose: false })

    // Should return the working directory and not crash
    expect(result).toBe(tmpDir)

    // File should remain unchanged
    const unchanged = fs.readFileSync(path.join(tmpDir, 'RegularComponent.tsx'), 'utf8')
    expect(unchanged.trim()).toBe(originalContent.trim())

    // Cleanup
    deleteDirRecursive(tmpDir)
  })

  it('migrates comprehensive mixed components (external + inline in same file)', async () => {
    // Setup temp directory with a component that has both S.* and <Box> in same file
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wui-unified-test-same-file-'))
    const currentDir = path.dirname(new URL(import.meta.url).pathname)
    const fixturesDir = path.resolve(currentDir, '__fixtures__')

    // Copy fixtures (styles.ts + MixedComponent.tsx)
    fs.mkdirSync(tmpDir, { recursive: true })
    fs.copyFileSync(path.join(fixturesDir, 'styles.ts'), path.join(tmpDir, 'styles.ts'))
    fs.copyFileSync(
      path.join(fixturesDir, 'MixedComponent.tsx'),
      path.join(tmpDir, 'MixedComponent.tsx')
    )

    // Run unified migration with copyDir=false (migrate in place)
    await migrateAll(tmpDir, { copyDir: false, interactive: false, verbose: false })

    // Check that styles.scss was created
    const stylesScssPath = path.join(tmpDir, 'styles.scss')
    expect(fs.existsSync(stylesScssPath)).toBe(true)

    const stylesScss = fs.readFileSync(stylesScssPath, 'utf8')
    expect(stylesScss).toMatchSnapshot('same-file-styles.scss')

    // Check that MixedComponent.tsx was migrated with BOTH transformations
    const migratedComponent = fs.readFileSync(path.join(tmpDir, 'MixedComponent.tsx'), 'utf8')
    expect(migratedComponent).toMatchSnapshot('same-file-component.tsx')

    // Cleanup
    deleteDirRecursive(tmpDir)
  })
})
