import { hexToRGB } from './hex-to-rgb'

describe('hexToRGB', () => {
  const testCases = [
    { input: '#000000', expected: '0, 0, 0' },
    { input: '#FFFFFF', expected: '255, 255, 255' },
    { input: '#FF0000', expected: '255, 0, 0' },
    { input: '#00FF00', expected: '0, 255, 0' },
    { input: '#0000FF', expected: '0, 0, 255' },
    { input: '#FFCD00', expected: '255, 205, 0' },
  ]

  it('should convert 6-digit hex colors to RGB values', () => {
    testCases.forEach(({ expected, input }) => {
      expect(hexToRGB(input)).toBe(expected)
    })
  })

  it('should handle 3-digit hex colors', () => {
    expect(hexToRGB('#000')).toBe('0, 0, 0')
    expect(hexToRGB('#FFF')).toBe('255, 255, 255')
    expect(hexToRGB('#F00')).toBe('255, 0, 0')
  })

  it('should handle lowercase hex colors', () => {
    expect(hexToRGB('#ffffff')).toBe('255, 255, 255')
    expect(hexToRGB('#ff0000')).toBe('255, 0, 0')
    expect(hexToRGB('#fff')).toBe('255, 255, 255')
  })

  it('should handle hex colors without hash', () => {
    expect(hexToRGB('FFFFFF')).toBe('255, 255, 255')
    expect(hexToRGB('000000')).toBe('0, 0, 0')
    expect(hexToRGB('FFF')).toBe('255, 255, 255')
  })

  it('should return undefined for invalid inputs', () => {
    expect(hexToRGB('')).toBeUndefined()
    expect(hexToRGB(undefined)).toBeUndefined()
    expect(hexToRGB('#GGG')).toBeUndefined()
    expect(hexToRGB('#GGGGGG')).toBeUndefined()
    expect(hexToRGB('#FF')).toBeUndefined()
    expect(hexToRGB('#FFFF')).toBeUndefined()
  })
})
