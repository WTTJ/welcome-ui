import { describe, expect, it } from 'vitest'

import type { TokensStructure } from './parseTokens'
import { parseTokens } from './parseTokens'

describe('parseTokens', () => {
  it('flatten simple tokens', () => {
    const tokens: TokensStructure = {
      primary: { value: '#fff' },
      secondary: { value: '#000' },
    }
    expect(parseTokens(tokens)).toEqual({
      primary: '#fff',
      secondary: '#000',
    })
  })

  it('flattens nested tokens', () => {
    const tokens: TokensStructure = {
      colors: {
        primary: { value: '#fff' },
        secondary: { value: '#000' },
      },
    }
    expect(parseTokens(tokens)).toEqual({
      'colors-primary': '#fff',
      'colors-secondary': '#000',
    })
  })

  it('handles type and ignores it in keys', () => {
    const tokens: TokensStructure = {
      colors: {
        primary: { value: '#fff' },
        type: 'color',
      },
    }
    expect(parseTokens(tokens)).toEqual({
      'colors-primary': '#fff',
    })
  })

  it('resolves references in value', () => {
    const tokens: TokensStructure = {
      base: { value: '#fff' },
      main: { value: '{base}' },
    }
    expect(parseTokens(tokens)).toEqual({
      base: '#fff',
      main: '#fff',
    })
  })

  it('handles multiple references', () => {
    const tokens: TokensStructure = {
      base: {
        accent: { value: '#000' },
      },
      combo: { value: '{base.accent}' },
    }
    expect(parseTokens(tokens)).toEqual({
      'base-accent': '#000',
      combo: '#000',
    })
  })

  it('returns an empty object for empty tokens', () => {
    expect(parseTokens({})).toEqual({})
  })
})
