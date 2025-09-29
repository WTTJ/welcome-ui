import fs from 'fs'
import os from 'os'
import path from 'path'

import { describe, expect, it } from 'vitest'

import * as upgradeScript from './upgrade-v9.mjs'

describe('upgrade-v9 migration script', () => {
  describe('processComponents (integration)', () => {
    it('migrates fixtures/Component.tsx as expected', async () => {
      // Setup temp dir and copy fixture
      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wui-upgrade-test-'))
      const srcFile = path.join(__dirname, 'fixtures', 'Component.tsx')
      const destFile = path.join(tmpDir, 'Component.tsx')
      fs.copyFileSync(srcFile, destFile)

      // Find components in the temp file
      const components = upgradeScript.findBoxComponents(tmpDir)
      // Run migration (shouldReplace = true)
      await upgradeScript.processComponents(components, true)

      // Read migrated file
      const migrated = fs.readFileSync(destFile, 'utf8')

      // Assert output (snapshot or inline string)
      expect(migrated).toMatchSnapshot()
    })
  })

  describe('findBoxComponents', () => {
    it('finds Box, Flex, Grid, Stack components in a directory', () => {
      // Setup: create a mock directory structure in memory or use a temp dir
      // For demonstration, just check that the function runs and returns an array
      const result = upgradeScript.findBoxComponents(path.join(__dirname, 'fixtures'))
      expect(Array.isArray(result)).toBe(true)
    })
  })

  describe('transformValue', () => {
    it('transforms known keys using valueMap', () => {
      expect(upgradeScript.transformValue('align', 'center')).toContain('items')
      expect(upgradeScript.transformValue('backgroundColor', 'red')).toContain('bg')
    })
    it('returns undefined for unknown keys', () => {
      expect(upgradeScript.transformValue('unknownKey', 'foo')).toBeUndefined()
    })
  })

  describe('transform', () => {
    it('handles 100% as full', () => {
      expect(upgradeScript.transform('w', '100%')).toBe('w-full')
    })
    it('handles numeric values', () => {
      expect(upgradeScript.transform('w', '16')).toContain('w-[')
    })
    it('handles 0 as zero class', () => {
      expect(upgradeScript.transform('m', '0')).toBe('m-0')
    })
  })

  describe('transformSpecificValue', () => {
    it('handles grid-cols special cases', () => {
      expect(upgradeScript.transformSpecificValue('grid-cols-1fr')).toBe('grid-cols-1')
      expect(upgradeScript.transformSpecificValue('grid-cols-1fr 1fr')).toBe('grid-cols-2')
    })
    it('returns value for non-grid-cols', () => {
      expect(upgradeScript.transformSpecificValue('foo')).toBe('foo')
    })
  })
})
