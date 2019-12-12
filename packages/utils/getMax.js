export const getMax = (width, height = width) => {
  const widthValue = parseInt(width, 10)
  const heightValue = parseInt(height, 10)
  const diff = widthValue - heightValue
  return diff >= 0 ? width : height
}
