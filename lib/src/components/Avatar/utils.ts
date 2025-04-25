import type { ThemeColorTokens } from '@/theme'

export function getColorByLength(colors: ThemeColorTokens, text = ''): string {
  const colorKeys = Object.keys(colors).filter(color => color.startsWith('secondary-'))
  const subColorIndex = text.length % colorKeys.length

  return colorKeys[subColorIndex]
}

export function getInitials(name = ''): string {
  const [firstWord, lastWord] = name.split(' ')

  if (firstWord && lastWord) {
    return `${firstWord.charAt(0).toUpperCase()}${lastWord.charAt(0).toUpperCase()}`
  } else {
    return firstWord.substring(0, 2).toUpperCase()
  }
}
