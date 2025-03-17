import { hexToRGBA } from './hex-to-rgba'

describe('hexToRGBA', () => {
  it('should convert hex colors to RGBA with default transparency', () => {
    expect(hexToRGBA('#000000')).toBe('rgba(0, 0, 0, 1)')
    expect(hexToRGBA('#FFFFFF')).toBe('rgba(255, 255, 255, 1)')
    expect(hexToRGBA('#FF0000')).toBe('rgba(255, 0, 0, 1)')
  })

  it('should handle custom transparency values', () => {
    expect(hexToRGBA('#000000', 0.5)).toBe('rgba(0, 0, 0, 0.5)')
    expect(hexToRGBA('#FFFFFF', 0)).toBe('rgba(255, 255, 255, 0)')
    expect(hexToRGBA('#FF0000', 0.75)).toBe('rgba(255, 0, 0, 0.75)')
  })

  it('should handle 3-digit hex colors', () => {
    expect(hexToRGBA('#000')).toBe('rgba(0, 0, 0, 1)')
    expect(hexToRGBA('#FFF', 0.5)).toBe('rgba(255, 255, 255, 0.5)')
  })

  it('should handle lowercase hex colors', () => {
    expect(hexToRGBA('#ffffff')).toBe('rgba(255, 255, 255, 1)')
    expect(hexToRGBA('#ff0000', 0.5)).toBe('rgba(255, 0, 0, 0.5)')
  })

  it('should return undefined for invalid inputs', () => {
    expect(hexToRGBA('')).toBeUndefined()
    expect(hexToRGBA(undefined)).toBeUndefined()
    expect(hexToRGBA('#GGG')).toBeUndefined()
    expect(hexToRGBA('#GGGGGG')).toBeUndefined()
  })
})
