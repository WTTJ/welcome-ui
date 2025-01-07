const getHexValueAtLocation = (value: string, start: number, count: number) => {
  return parseInt(value.substring(start, count), 16)
}

const isValidHex = (hex: string) => /(^[0-9a-fA-F]{6}$)|(^[0-9a-fA-F]{3}$)/.test(hex)

export const hexToRGB = (hex: string): string => {
  if (!hex) {
    return
  }

  hex = hex.replace('#', '')
  if (!isValidHex(hex)) {
    return
  }

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const hexToR = (hex: string) => getHexValueAtLocation(hex, 0, 2)
  const hexToG = (hex: string) => getHexValueAtLocation(hex, 2, 4)
  const hexToB = (hex: string) => getHexValueAtLocation(hex, 4, 6)

  return `${hexToR(hex)}, ${hexToG(hex)}, ${hexToB(hex)}`
}
