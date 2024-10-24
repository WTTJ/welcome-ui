import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

type State = 'default' | 'danger' | 'warning' | 'info' | 'success'

type Sizes = 'sm' | 'md'

type AttributesState = CSSObject

export type ThemeAlerts = {
  default: CSSObject
  sizes: Record<Sizes, { padding?: string }>
  title: Record<State, { color: CSSObject['color'] }>
} & Record<State, AttributesState>

export const getAlerts = (theme: WuiTheme): ThemeAlerts => {
  const { borderWidths, colors, fontSizes, radii, space } = theme

  return {
    default: {
      fontSize: fontSizes.sm,
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      color: colors['neutral-70'],
      backgroundColor: colors['neutral-10'],
      borderColor: colors['neutral-30'],
      borderRadius: radii.lg,
    },
    danger: {
      backgroundColor: colors['danger-10'],
      borderColor: colors['danger-50'],
    },
    warning: {
      backgroundColor: colors['warning-10'],
      borderColor: colors['warning-50'],
    },
    info: {
      backgroundColor: colors['info-10'],
      borderColor: colors['info-50'],
    },
    success: {
      backgroundColor: colors['success-10'],
      borderColor: colors['success-50'],
    },
    sizes: {
      sm: {
        padding: space.lg,
      },
      md: {
        padding: space.xl,
      },
    },
    title: {
      default: {
        color: colors['neutral-90'],
      },
      danger: {
        color: colors['neutral-90'],
      },
      warning: {
        color: colors['neutral-90'],
      },
      info: {
        color: colors['neutral-90'],
      },
      success: {
        color: colors['neutral-90'],
      },
    },
  }
}
