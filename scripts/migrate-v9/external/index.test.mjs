import fs from 'fs'
import os from 'os'
import path from 'path'
import { fileURLToPath } from 'url'

import { describe, expect, it } from 'vitest'

import { migrate } from './index.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

describe('External Migration Tests', () => {
  it('migrates styled-components fixture to CSS classes', async () => {
    // Setup temp dir and copy fixtures
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wui-external-test-'))
    const fixturesDir = path.join(__dirname, 'fixtures')

    // Copy fixture files
    fs.copyFileSync(path.join(fixturesDir, 'styles.ts'), path.join(tmpDir, 'styles.ts'))
    fs.copyFileSync(path.join(fixturesDir, 'Component.tsx'), path.join(tmpDir, 'Component.tsx'))

    // Run migration
    await migrate(tmpDir, false) // Don't copy, work in place

    // Check that styles.scss was created
    const scssPath = path.join(tmpDir, 'styles.scss')
    expect(fs.existsSync(scssPath)).toBe(true)

    // Read generated SCSS and test against snapshot
    const generatedScss = fs.readFileSync(scssPath, 'utf8')
    expect(generatedScss).toMatchSnapshot('generated-styles.scss')

    // Check that component file was updated and test against snapshot
    const updatedComponent = fs.readFileSync(path.join(tmpDir, 'Component.tsx'), 'utf8')
    expect(updatedComponent).toMatchSnapshot('migrated-component.tsx')

    // Cleanup
    fs.rmSync(tmpDir, { recursive: true })
  })
})
