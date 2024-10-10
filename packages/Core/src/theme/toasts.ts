import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'
import { getTexts } from './typography'

export type ThemeToasts = {
  bottom: CSSObject
  default: CSSObject
  growls: {
    default: CSSObject
    title: CSSObject
  }
  snackbar: {
    default: CSSObject
  }
  top: CSSObject
}

export const getToasts = (theme: WuiTheme): ThemeToasts => {
  const { borderWidths, colors, fontWeights, radii, space } = theme

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
        borderRadius: radii.lg,
      },
      title: {
        fontWeight: fontWeights.bold,
        color: colors['dark-900'],
      },
    },
    snackbar: {
      default: {
        borderRadius: radii.lg,
      },
    },
  }
}
