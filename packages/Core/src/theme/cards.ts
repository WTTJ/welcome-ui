import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeCards = {
  default: CSSObject
  cover: CSSObject
}

export const getCards = (theme: WuiTheme): ThemeCards => {
  const { radii } = theme
  return {
    default: {
      overflow: 'hidden',
    },
    cover: {
      borderTopLeftRadius: radii.sm,
      borderTopRightRadius: radii.sm,
    },
  }
}
