import { CSSObject } from '@xstyled/system'

import { WuiTheme } from './types'

type State = 'error' | 'warning' | 'info' | 'success'

type AttributesState = CSSObject

export type ThemeAlerts = {
  default: CSSObject
  title: Record<State, { color: string }>
} & Record<State, AttributesState>

export const getAlerts = (theme: WuiTheme): ThemeAlerts => {
  const { borderWidths, colors, fontSizes, radii, space } = theme

  return {
    default: {
      fontSize: fontSizes.body3,
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      borderRadius: radii.md,
      padding: space.xl,
      color: colors.dark[200],
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
      error: {
        color: colors.danger[700],
      },
      warning: {
        color: colors.warning[700],
      },
      info: {
        color: colors.info[700],
      },
      success: {
        color: colors.success[700],
      },
    },
  }
}
