import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'
import { getTexts } from './typography'

export type ThemeToasts = {
  default: CSSObject
  top: CSSObject
  bottom: CSSObject
  growls: {
    default: CSSObject
    title: CSSObject
  }
}

export const getToasts = (theme: WuiTheme): ThemeToasts => {
  const { borderWidths, colors, fontWeights, space } = theme

  return {
    default: {
      paddingLeft: space.sm,
      paddingRight: space.sm,
    },
    top: {
      paddingTop: space.lg,
    },
    bottom: {
      paddingBottom: space.lg,
    },
    growls: {
      default: {
        ...getTexts(theme).sm,
        borderWidth: borderWidths.sm,
        borderStyle: 'solid',
      },
      title: {
        fontWeight: fontWeights.bold,
        color: colors['dark-900'],
      },
    },
  }
}
