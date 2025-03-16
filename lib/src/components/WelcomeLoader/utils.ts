import { hexToRGBA } from '@/utils'

export const convertHexToVectorColor = (hex: string) => {
  try {
    const newColor = hexToRGBA(hex)
      .split(',')
      .map(c => parseFloat(c) / 255)
      .join(',')

    return newColor
  } catch (error) {
    return undefined
  }
}
