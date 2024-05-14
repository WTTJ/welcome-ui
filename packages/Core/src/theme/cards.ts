import { CSSObject } from '@xstyled/styled-components'

export type ThemeCards = {
  default: CSSObject
}

export const getCards = (): ThemeCards => {
  return {
    default: {
      overflow: 'hidden',
    },
  }
}
