import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'
import { getTexts } from '../../theme/typography'

export type ThemeToasts = {
  bottom: CSSObject
  default: CSSObject
  growls: {
    default: CSSObject
    title: CSSObject
  }
  snackbar: {
    default: CSSObject
    separator: {
      danger: CSSObject
      default: CSSObject
      info: CSSObject
      success: CSSObject
      warning: CSSObject
    }
  }
  top: CSSObject
}

export const getToasts = (theme: ThemeValues): ThemeToasts => {
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
        maxWidth: 340,
      },
      title: {
        fontWeight: fontWeights.bold,
        color: colors['neutral-90'],
      },
    },
    snackbar: {
      default: {
        borderRadius: radii.lg,
      },
      separator: {
        default: {
          borderLeft: '1px solid',
          borderLeftColor: colors['neutral-30'],
        },
        danger: {
          borderLeftColor: colors['red-20'],
        },
        warning: {
          borderLeftColor: colors['orange-20'],
        },
        info: {
          borderLeftColor: colors['blue-30'],
        },
        success: {
          borderLeftColor: colors['green-30'],
        },
      },
    },
  }
}
