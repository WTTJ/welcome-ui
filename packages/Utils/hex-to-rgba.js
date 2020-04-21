import { hexToRGB } from './hex-to-rgb'

export const hexToRGBA = (hex, transparency = 1) => {
  const toRgb = hexToRGB(hex)

  return `rgba(${toRgb}, ${transparency})`
}
