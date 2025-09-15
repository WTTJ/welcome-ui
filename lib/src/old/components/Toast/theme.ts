import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

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

export type ToastVariant = 'danger' | 'default' | 'info' | 'success' | 'warning'

export const getToasts = (theme: ThemeValues): ThemeToasts => {
  const { borderWidths, colors, fontWeights, radii, space } = theme

  return {
    bottom: {
      paddingBottom: space.lg,
    },
    default: {
      paddingLeft: space.sm,
      paddingRight: space.sm,
    },
    growls: {
      default: {
        ...getTexts(theme).sm,
        borderRadius: radii.lg,
        borderStyle: 'solid',
        borderWidth: borderWidths.sm,
        maxWidth: 340,
      },
      title: {
        color: colors['neutral-90'],
        fontWeight: fontWeights.bold,
      },
    },
    snackbar: {
      default: {
        borderRadius: radii.lg,
      },
      separator: {
        danger: {
          borderLeftColor: colors['red-20'],
        },
        default: {
          borderLeft: '1px solid',
          borderLeftColor: colors['neutral-30'],
        },
        info: {
          borderLeftColor: colors['blue-30'],
        },
        success: {
          borderLeftColor: colors['green-30'],
        },
        warning: {
          borderLeftColor: colors['orange-20'],
        },
      },
    },
    top: {
      paddingTop: space.lg,
    },
  }
}
