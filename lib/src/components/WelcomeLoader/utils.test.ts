import { convertHexToVectorColor } from './utils'

const colors = [
  { hex: '#0000FF', vector: '0,0,1' },
  { hex: '#00FF00', vector: '0,1,0' },
  { hex: '#800080', vector: '0.5019607843137255,0,0.5019607843137255' },
  { hex: '#FFFFFF', vector: '1,1,1' },
  { hex: '#000000', vector: '0,0,0' },
]

describe('convertHexToVectorColor', () => {
  it('should convert hex colors to vector colors correctly', () => {
    colors.forEach(({ hex, vector }) => {
      expect(convertHexToVectorColor(hex)).toBe(vector)
    })
  })

  it('should return undefined for invalid hex colors', () => {
    expect(convertHexToVectorColor('invalid')).toBeUndefined()
    expect(convertHexToVectorColor('#XYZ')).toBeUndefined()
    expect(convertHexToVectorColor('')).toBeUndefined()
  })

  it('should handle hex colors without # prefix', () => {
    expect(convertHexToVectorColor('0000FF')).toBe('0,0,1')
    expect(convertHexToVectorColor('00FF00')).toBe('0,1,0')
  })

  it('should handle short hex format (#RGB)', () => {
    expect(convertHexToVectorColor('#00F')).toBe('0,0,1')
    expect(convertHexToVectorColor('#0F0')).toBe('0,1,0')
  })
})
