import { getColorFromName, getInitials } from '../utils'

describe('getColorFromName', () => {
  it('returns a secondary color key based on text length', () => {
    expect(getColorFromName('a')).toBe('secondary-green')
    expect(getColorFromName('ab')).toBe('secondary-orange')
    expect(getColorFromName('abc')).toBe('secondary-pink')
    expect(getColorFromName('abcd')).toBe('secondary-teal')
  })

  it('returns the first secondary color for empty text', () => {
    expect(getColorFromName('')).toBe(undefined)
  })

  it('ignores non-secondary keys', () => {
    expect(getColorFromName('a')).toBe('secondary-green')
  })
})

describe('getInitials', () => {
  it('returns initials for two words', () => {
    expect(getInitials('John Doe')).toBe('JD')
    expect(getInitials('alice smith')).toBe('AS')
  })

  it('returns first two letters for single word', () => {
    expect(getInitials('Bob')).toBe('BO')
    expect(getInitials('a')).toBe('A')
  })

  it('returns only first letter for xs and sm size', () => {
    // xs size
    expect(getInitials('John Doe', 'xs')).toBe('J')
    expect(getInitials('Alice', 'xs')).toBe('A')

    // sm size
    expect(getInitials('John Doe', 'sm')).toBe('J')
    expect(getInitials('Alice', 'sm')).toBe('A')
  })

  it('handles accents', () => {
    expect(getInitials('Émile Douglas')).toBe('ÉD')
  })

  it('returns empty string for empty input', () => {
    expect(getInitials('')).toBe('')
  })
})
