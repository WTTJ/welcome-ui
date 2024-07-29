import { Theme } from '@xstyled/styled-components'

const subColorByNumber: {
  [key: number]: 'blue' | 'orange' | 'teal' | 'green' | 'purple' | 'red' | 'pink'
} = {
  1: 'teal',
  2: 'blue',
  3: 'red',
  4: 'orange',
  5: 'green',
  6: 'pink',
  7: 'purple',
}

export function getSeededColor(colors: Theme['colors'], seed = ''): string {
  const colorKeys = Object.keys(colors).filter(color => color.startsWith('brand-'))
  const subColorNumber = (seed.length % colorKeys.length) + 1
  const colorsIndex = `brand-${subColorByNumber[subColorNumber]}` as keyof Theme['colors']

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
