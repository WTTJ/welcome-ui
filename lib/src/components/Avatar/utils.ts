import type { AvatarOptions } from './types'

export const colors = [
  'secondary-blue',
  'secondary-green',
  'secondary-orange',
  'secondary-pink',
  'secondary-teal',
  'secondary-violet',
] as const

type Colors = (typeof colors)[number]

export function getInitials(name = '', size?: AvatarOptions['size']): string {
  const [firstWord, lastWord] = name.split(' ')

  // Return only the first letter for xsmall and small sizes
  if (size === 'xs' || size === 'sm') {
    return firstWord.charAt(0).toUpperCase()
  }

  // Return the first letters of the first and last words if there are multiple words
  if (lastWord) {
    return `${firstWord.charAt(0).toUpperCase()}${lastWord.charAt(0).toUpperCase()}`
  }

  // Return the first two letters of the first word if there is only one word
  return firstWord.substring(0, 2).toUpperCase()
}

export const getColorFromName = (name: string): Colors => {
  if (!name) return undefined

  const index = name.length % colors.length

  return colors[index] as Colors
}
