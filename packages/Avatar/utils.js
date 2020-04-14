export function randomColor(colors) {
  const colorKeys = Object.keys(colors)
  const randomIndex = Math.floor(Math.random() * (colorKeys.length - 1))
  return colors[colorKeys.find((color, i) => i === randomIndex)]
}
