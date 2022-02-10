import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'

export type ThemeCards = {
  default: CSSObject
  cover: CSSObject
}

export const getCards = (theme: WuiTheme): ThemeCards => {
  const { colors, radii } = theme
  return {
    default: {
      overflow: 'hidden',
      color: colors.dark[200],
    },
    cover: {
      borderTopLeftRadius: radii.sm,
      borderTopRightRadius: radii.sm,
    },
  }
}
