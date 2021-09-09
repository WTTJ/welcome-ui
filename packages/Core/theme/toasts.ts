import { WuiTheme } from './types'
import { getTexts } from './typography'

type Variant = 'error' | 'warning' | 'info' | 'success'

type VariantAttributes = {
  borderColor: string
  backgroundColor: string
}

export type ThemeToasts = {
  default: {
    paddingLeft: string
    paddingRight: string
  }
  top: {
    paddingTop: string
  }
  bottom: {
    paddingBottom: string
  }
  growls: {
    default: {
      backgroundColor: string
      borderColor: string
      borderWidth: string
      borderStyle: string
      borderRadius: string
    }
    title: {
      fontWeight: string
    }
  } & Record<Variant, VariantAttributes>
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
        ...getTexts(theme).body3,
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
        borderColor: colors.info[700],
      },
      success: {
        backgroundColor: colors.success[100],
        borderColor: colors.success[700],
      },
      title: {
        ...getTexts(theme).h5,
        fontWeight: fontWeights.bold,
      },
    },
  }
}
