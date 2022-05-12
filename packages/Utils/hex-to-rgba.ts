import { hexToRGB } from './hex-to-rgb'

const colorFormatRegex =
  /^(rgb|hsl)(a?)[(]\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*,\s*([\d.]+\s*%?)\s*(?:,\s*([\d.]+)\s*)?[)]$/

export const hexToRGBA = (hex: string, transparency = 1): string => {
  if (!hex) return

  // check if it's rgb(), rgba(), hsl() and hsla()
  if (!hex.startsWith('#') && colorFormatRegex.test(hex)) return hex

  const toRgb = hexToRGB(hex)

  return `rgba(${toRgb}, ${transparency})`
}
