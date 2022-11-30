import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeHints = CSSObject

export const getHints = (theme: WuiTheme): ThemeHints => {
  const { colors, texts } = theme

  return {
    ...texts.xs,
    color: colors['dark-500'],
  }
}
