import { describe, expect, it } from 'vitest'

import { processIdentifier } from '../helpers/css-transformer.mjs'

describe('processIdentifier', () => {
  describe('PascalCase components', () => {
    it('should detect React components', () => {
      expect(processIdentifier({ name: 'MyComponent' })).toBe(
        '__COMPONENT_SELECTOR_COMMENT__MyComponent__'
      )
      expect(processIdentifier({ name: 'UserProfile' })).toBe(
        '__COMPONENT_SELECTOR_COMMENT__UserProfile__'
      )
      expect(processIdentifier({ name: 'NavBar' })).toBe('__COMPONENT_SELECTOR_COMMENT__NavBar__')
      expect(processIdentifier({ name: 'OrganizationLogo' })).toBe(
        '__COMPONENT_SELECTOR_COMMENT__OrganizationLogo__'
      )
    })

    it('should handle single letter components', () => {
      expect(processIdentifier({ name: 'A' })).toBe('__COMPONENT_SELECTOR_COMMENT__A__')
      expect(processIdentifier({ name: 'B' })).toBe('__COMPONENT_SELECTOR_COMMENT__B__')
    })
  })

  describe('CSS mixins (xxx by itself on single line)', () => {
    it('should convert style variables to @include mixins when standalone', () => {
      expect(processIdentifier({ name: 'triggerActiveStyles' }, { isStandalone: true })).toBe(
        '@include trigger-active-styles'
      )
      expect(processIdentifier({ name: 'buttonStyles' }, { isStandalone: true })).toBe(
        '@include button-styles'
      )
      expect(processIdentifier({ name: 'hoverStyles' }, { isStandalone: true })).toBe(
        '@include hover-styles'
      )
      expect(processIdentifier({ name: 'focusStyles' }, { isStandalone: true })).toBe(
        '@include focus-styles'
      )
    })

    it('should handle different naming patterns when standalone', () => {
      expect(processIdentifier({ name: 'activeButtonStyle' }, { isStandalone: true })).toBe(
        '@include active-button-style'
      )
      expect(processIdentifier({ name: 'primaryButtonCSS' }, { isStandalone: true })).toBe(
        '@include primary-button-c-s-s'
      )
      expect(processIdentifier({ name: 'customStyles' }, { isStandalone: true })).toBe(
        '@include custom-styles'
      )
    })
  })

  describe('Variables and constants (not standalone)', () => {
    it('should mark constants for manual migration', () => {
      expect(processIdentifier({ name: 'TOPNAV_HEIGHT' })).toBe(
        '/* WUI V9 TO MIGRATE - DYNAMIC VALUE: TOPNAV_HEIGHT */'
      )
      expect(processIdentifier({ name: 'API_KEY' })).toBe(
        '/* WUI V9 TO MIGRATE - DYNAMIC VALUE: API_KEY */'
      )
      expect(processIdentifier({ name: 'USER_PREFERENCES' })).toBe(
        '/* WUI V9 TO MIGRATE - DYNAMIC VALUE: USER_PREFERENCES */'
      )
    })

    it('should mark props for manual migration', () => {
      expect(processIdentifier({ name: 'variant' })).toBe(
        '/* WUI V9 TO MIGRATE - DYNAMIC VALUE: variant */'
      )
      expect(processIdentifier({ name: 'displayDetail' })).toBe(
        '/* WUI V9 TO MIGRATE - DYNAMIC VALUE: displayDetail */'
      )
      expect(processIdentifier({ name: 'isActive' })).toBe(
        '/* WUI V9 TO MIGRATE - DYNAMIC VALUE: isActive */'
      )
      expect(processIdentifier({ name: 'props' })).toBe(
        '/* WUI V9 TO MIGRATE - DYNAMIC VALUE: props */'
      )
    })

    it('should treat style variables as regular variables when not standalone', () => {
      expect(processIdentifier({ name: 'triggerActiveStyles' })).toBe(
        '/* WUI V9 TO MIGRATE - DYNAMIC VALUE: triggerActiveStyles */'
      )
      expect(processIdentifier({ name: 'buttonStyles' })).toBe(
        '/* WUI V9 TO MIGRATE - DYNAMIC VALUE: buttonStyles */'
      )
    })
  })

  describe('Edge cases', () => {
    it('should handle mixed case correctly', () => {
      // Components start with uppercase (regardless of context)
      expect(processIdentifier({ name: 'MyComponentStyles' })).toBe(
        '__COMPONENT_SELECTOR_COMMENT__MyComponentStyles__'
      )

      // Variables start with lowercase - become mixins when standalone
      expect(processIdentifier({ name: 'myComponentStyles' }, { isStandalone: true })).toBe(
        '@include my-component-styles'
      )
    })

    it('should handle abbreviations', () => {
      expect(processIdentifier({ name: 'CSS' })).toBe('__COMPONENT_SELECTOR_COMMENT__CSS__')
      expect(processIdentifier({ name: 'css' }, { isStandalone: true })).toBe('@include css')
    })
  })
})
