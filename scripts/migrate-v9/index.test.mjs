import fs from 'fs'
import os from 'os'
import path from 'path'

import { describe, expect, it } from 'vitest'

import { findAllComponentUsages } from './index.mjs'
import { processComponents } from './process-components.mjs'
import { transform, transformSpecificValue, transformValue } from './transform.mjs'

describe('upgrade-v9 migration script', () => {
  describe('processComponents (integration)', () => {
    it('migrates fixtures/Component1.tsx as expected', async () => {
      // Setup temp dir and copy fixture
      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wui-upgrade-test-'))
      const srcFile = path.join(__dirname, './fixtures/Component1.tsx')
      const destFile = path.join(tmpDir, 'Component1.tsx')
      fs.copyFileSync(srcFile, destFile)

      // Find components in the temp file
      const components = findAllComponentUsages(tmpDir)
      // Run migration (shouldReplace = true)
      await processComponents(components, true)

      // Read migrated file
      const migrated = fs.readFileSync(destFile, 'utf8')

      // Assert output (snapshot or inline string)
      expect(migrated).toMatchSnapshot()
    })

    it('migrates fixtures/Component2.tsx as expected', async () => {
      // Setup temp dir and copy fixture
      const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'wui-upgrade-test-'))
      const srcFile = path.join(__dirname, './fixtures/Component2.tsx')
      const destFile = path.join(tmpDir, 'Component2.tsx')
      fs.copyFileSync(srcFile, destFile)

      // Find components in the temp file
      const components = findAllComponentUsages(tmpDir)
      // Run migration (shouldReplace = true)
      await processComponents(components, true)

      // Read migrated file
      const migrated = fs.readFileSync(destFile, 'utf8')

      // Assert output (snapshot or inline string)
      expect(migrated).toMatchSnapshot()
    })
  })

  describe('findAllComponentUsages', () => {
    it('finds Box, Flex, Grid, Stack components in a directory', () => {
      // Setup: create a mock directory structure in memory or use a temp dir
      // For demonstration, just check that the function runs and returns an array
      const result = findAllComponentUsages(path.join(__dirname, './fixtures'))
      expect(Array.isArray(result)).toBe(true)
    })
  })

  describe('transformValue', () => {
    it('transforms known keys using valueMap', () => {
      expect(transformValue('align', 'center')).toContain('items')
      expect(transformValue('backgroundColor', 'red')).toContain('bg')
    })
    it('returns undefined for unknown keys', () => {
      expect(transformValue('unknownKey', 'foo')).toBeUndefined()
    })
  })

  describe('transform', () => {
    it('handles 100% as full', () => {
      expect(transform('w', '100%')).toBe('w-full')
    })
    it('handles numeric values', () => {
      expect(transform('w', '16')).toContain('w-[')
    })
    it('handles 0 as zero class', () => {
      expect(transform('m', '0')).toBe('m-0')
    })
  })

  describe('transformSpecificValue', () => {
    it('handles grid-cols special cases', () => {
      expect(transformSpecificValue('grid-cols-1fr')).toBe('grid-cols-1')
      expect(transformSpecificValue('grid-cols-1fr 1fr')).toBe('grid-cols-2')
    })
    it('returns value for non-grid-cols', () => {
      expect(transformSpecificValue('foo')).toBe('foo')
    })
  })
})
