import { hexToRGB } from '@/utils'

export const convertHexToVectorColor = (hex: string) => {
  try {
    const rgb = hexToRGB(hex)

    if (!rgb) {
      return undefined
    }

    return rgb
      .split(',')
      .map(c => parseFloat(c) / 255)
      .join(',')
  } catch (error) {
    return undefined
  }
}
