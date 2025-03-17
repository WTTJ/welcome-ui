import { hexToRGB } from './hex-to-rgb'

export const hexToRGBA = (hex: string, transparency = 1): string => {
  const toRgb = hexToRGB(hex)

  return toRgb ? `rgba(${toRgb}, ${transparency})` : undefined
}
