import { hexToRGB } from './hex-to-rgb'

export const hexToRGBA = (hex: string, transparency = 1): string => {
  if (!hex) return ''

  if (!hex.startsWith('#')) return hex

  const toRgb = hexToRGB(hex)

  return `rgba(${toRgb}, ${transparency})`
}
