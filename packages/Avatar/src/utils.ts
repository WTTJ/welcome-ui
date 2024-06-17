import { Theme } from '@xstyled/styled-components'

const subColorByNumber: { [key: number]: 'blue' | 'red' | 'green' | 'purple' } = {
  1: 'blue',
  2: 'red',
  3: 'green',
  4: 'purple',
}

export function getSeededColor(colors: Theme['colors'], seed = ''): string {
  const colorKeys = Object.keys(colors).filter(color => color.startsWith('secondary-'))
  const subColorNumber = (seed.length % colorKeys.length) + 1
  const colorsIndex = `secondary-${subColorByNumber[subColorNumber]}` as keyof Theme['colors']

  return colors[colorsIndex]
}

export function getInitials(name = ''): string {
  const [firstWord, lastWord] = name.split(' ')

  if (firstWord && lastWord) {
    return `${firstWord.charAt(0).toUpperCase()}${lastWord.charAt(0).toUpperCase()}`
  } else {
    return firstWord.substring(0, 2).toUpperCase()
  }
}
