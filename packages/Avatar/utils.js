export function getSeededColor(colors, seed) {
  const colorKeys = Object.keys(colors)
  const index = seed.length % colorKeys.length
  return colors[colorKeys[index]]
}

export function getInitials(name) {
  const formattedName = name && name.replace(/\W+/gm, ' ')
  let [firstWord, lastWord] = formattedName.split(' ')

  if (firstWord && lastWord) {
    return `${firstWord.charAt(0).toUpperCase()}${lastWord.charAt(0).toUpperCase()}`
  } else {
    return firstWord.substring(0, 2).toUpperCase()
  }
}
