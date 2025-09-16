import { getMax } from '../utils'

describe('getMax', () => {
  it('returns the width if width >= height', () => {
    expect(getMax('100px', '50')).toBe('100px')
    expect(getMax('100', '100px')).toBe('100')
  })

  it('returns the height if height > width', () => {
    expect(getMax('50', '100px')).toBe('100px')
  })

  it('parses string numbers and px units', () => {
    expect(getMax('42px', '24')).toBe('42px')
    expect(getMax('24', '42px')).toBe('42px')
  })

  it('uses width if height is not provided', () => {
    expect(getMax('77px')).toBe('77px')
  })

  it('handles negative numbers', () => {
    expect(getMax('-10px', '5rem')).toBe('5rem')
    expect(getMax('5rem', '-10px')).toBe('5rem')
  })
})
