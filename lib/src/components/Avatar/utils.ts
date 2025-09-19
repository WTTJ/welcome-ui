import type { Colors } from './types'

import { colors } from '.'

export function getInitials(name = ''): string {
  const [firstWord, lastWord] = name.split(' ')

  if (firstWord && lastWord) {
    return `${firstWord.charAt(0).toUpperCase()}${lastWord.charAt(0).toUpperCase()}`
  } else {
    return firstWord.substring(0, 2).toUpperCase()
  }
}

export const getColorFromName = (name: string): Colors => {
  const index = name.length % colors.length
  return colors[index] as Colors
}
