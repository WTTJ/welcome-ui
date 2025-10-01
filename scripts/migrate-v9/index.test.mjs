import fs from 'fs'
import os from 'os'
import path from 'path'

import { describe, expect, it } from 'vitest'

import { copyDirSync, deleteDirRecursive } from './file-utils.mjs'
import { migrateAll } from './index.mjs'

describe('Unified Migration', () => {
  it('migrates external styled components (styles.ts + Component.tsx)', async () => {
    // Setup temp directory and copy external fixtures
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wui-unified-test-external-'))
    const currentDir = path.dirname(new URL(import.meta.url).pathname)
    const fixturesDir = path.resolve(currentDir, 'external/fixtures')

    copyDirSync(fixturesDir, tmpDir)

    // Run unified migration with copyDir=false (migrate in place)
    await migrateAll(tmpDir, { copyDir: false, interactive: false, verbose: false })

    // Check that styles.scss was created
    const stylesScssPath = path.join(tmpDir, 'styles.scss')
    expect(fs.existsSync(stylesScssPath)).toBe(true)
    const stylesScss = fs.readFileSync(stylesScssPath, 'utf8')
    expect(stylesScss).toMatchSnapshot('external-styles.scss')

    // Check that Component.tsx was migrated (S.* -> className)
    const componentPath = path.join(tmpDir, 'Component.tsx')
    const migratedComponent = fs.readFileSync(componentPath, 'utf8')
    expect(migratedComponent).toMatchSnapshot('external-component.tsx')

    // Cleanup
    deleteDirRecursive(tmpDir)
  })

  it('migrates inline styled components (Box, Stack, etc.)', async () => {
    // Setup temp directory and copy inline fixture
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wui-unified-test-inline-'))
    const currentDir = path.dirname(new URL(import.meta.url).pathname)
    const fixtureFile = path.resolve(currentDir, 'inline/fixtures/Component2.tsx')
    const destFile = path.join(tmpDir, 'Component2.tsx')

    fs.mkdirSync(tmpDir, { recursive: true })
    fs.copyFileSync(fixtureFile, destFile)

    // Run unified migration with copyDir=false (migrate in place)
    await migrateAll(tmpDir, { copyDir: false, interactive: false, verbose: false })

    // Check that Component2.tsx was migrated (Box -> div, etc.)
    const migratedComponent = fs.readFileSync(destFile, 'utf8')
    expect(migratedComponent).toMatchSnapshot('inline-component.tsx')

    // Cleanup
    deleteDirRecursive(tmpDir)
  })

  it('migrates mixed components (both external + inline)', async () => {
    // Setup temp directory with both types of fixtures
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wui-unified-test-mixed-'))
    const currentDir = path.dirname(new URL(import.meta.url).pathname)

    // Copy external fixtures (styles.ts + Component.tsx with S.* usage)
    const externalFixturesDir = path.resolve(currentDir, 'external/fixtures')
    copyDirSync(externalFixturesDir, tmpDir)

    // Copy inline fixture as a different component with Box/Stack usage
    const inlineFixtureFile = path.resolve(currentDir, 'inline/fixtures/Component2.tsx')
    const inlineDestFile = path.join(tmpDir, 'InlineComponent.tsx')
    fs.copyFileSync(inlineFixtureFile, inlineDestFile)

    // Run unified migration with copyDir=false (migrate in place)
    await migrateAll(tmpDir, { copyDir: false, interactive: false, verbose: false })

    // Check external migration results
    const stylesScssPath = path.join(tmpDir, 'styles.scss')
    expect(fs.existsSync(stylesScssPath)).toBe(true)
    const stylesScss = fs.readFileSync(stylesScssPath, 'utf8')
    expect(stylesScss).toMatchSnapshot('mixed-styles.scss')

    const externalComponentPath = path.join(tmpDir, 'Component.tsx')
    const migratedExternalComponent = fs.readFileSync(externalComponentPath, 'utf8')
    expect(migratedExternalComponent).toMatchSnapshot('mixed-external-component.tsx')

    // Check inline migration results
    const inlineComponentPath = path.join(tmpDir, 'InlineComponent.tsx')
    const migratedInlineComponent = fs.readFileSync(inlineComponentPath, 'utf8')
    expect(migratedInlineComponent).toMatchSnapshot('mixed-inline-component.tsx')

    // Cleanup
    deleteDirRecursive(tmpDir)
  })

  it('handles directory with no styled components', async () => {
    // Setup temp directory with a regular component (no styles)
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wui-unified-test-empty-'))
    const currentDir = path.dirname(new URL(import.meta.url).pathname)
    const fixtureFile = path.resolve(currentDir, 'fixtures/RegularComponent.tsx')

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

  it('migrates files with BOTH external and inline components in the SAME file', async () => {
    // Setup temp directory with a component that has both S.* and <Box> in same file
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wui-unified-test-same-file-'))
    const currentDir = path.dirname(new URL(import.meta.url).pathname)
    const fixturesDir = path.resolve(currentDir, 'fixtures')

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
