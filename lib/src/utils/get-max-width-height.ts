export const getMax = (width: string, height: string = width): string => {
  const widthValue = parseInt(width, 10)
  const heightValue = parseInt(height, 10)
  const diff = widthValue - heightValue

  return diff >= 0 ? width : height
}
