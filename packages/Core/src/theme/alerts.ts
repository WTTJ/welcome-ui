import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

type State = 'default' | 'error' | 'warning' | 'info' | 'success'

type Sizes = 'sm' | 'md'

type AttributesState = CSSObject

export type ThemeAlerts = {
  sizes: Record<Sizes, { padding?: string }>
  default: CSSObject
  title: Record<State, { color: string }>
} & Record<State, AttributesState>

export const getAlerts = (theme: WuiTheme): ThemeAlerts => {
  const { borderWidths, colors, fontSizes, space } = theme

  return {
    default: {
      fontSize: fontSizes.sm,
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      color: colors['dark-700'],
      backgroundColor: colors['neutral-white'],
      borderColor: colors['dark-100'],
    },
    error: {
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
        color: colors['neutral-black'],
      },
      error: {
        color: colors['neutral-black'],
      },
      warning: {
        color: colors['neutral-black'],
      },
      info: {
        color: colors['neutral-black'],
      },
      success: {
        color: colors['neutral-black'],
      },
    },
  }
}
