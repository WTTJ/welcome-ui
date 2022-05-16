import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'
import { getTexts } from './typography'

type Variant = 'error' | 'warning' | 'info' | 'success'

export type ThemeToasts = {
  default: CSSObject
  top: CSSObject
  bottom: CSSObject
  growls: {
    default: CSSObject
    title: CSSObject
  } & Record<Variant, CSSObject>
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
        backgroundColor: theme.colors.light[700],
        borderColor: colors.nude[200],
        borderWidth: borderWidths.sm,
        borderStyle: 'solid',
        borderRadius: radii.md,
      },
      error: {
        backgroundColor: colors.danger[100],
        borderColor: colors.danger[500],
      },
      warning: {
        backgroundColor: colors.warning[100],
        borderColor: colors.warning[500],
      },
      info: {
        backgroundColor: colors.info[100],
        borderColor: colors.info[500],
      },
      success: {
        backgroundColor: colors.success[100],
        borderColor: colors.success[500],
      },
      title: {
        ...getTexts(theme).h5,
        fontWeight: fontWeights.bold,
      },
    },
  }
}
