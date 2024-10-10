import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

type State = 'default' | 'error' | 'warning' | 'info' | 'success'

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
      color: colors['dark-700'],
      backgroundColor: colors['light-900'],
      borderColor: colors['dark-100'],
      borderRadius: radii.lg,
    },
    error: {
      backgroundColor: colors['danger-100'],
      borderColor: colors['danger-500'],
    },
    warning: {
      backgroundColor: colors['warning-100'],
      borderColor: colors['warning-500'],
    },
    info: {
      backgroundColor: colors['info-100'],
      borderColor: colors['info-500'],
    },
    success: {
      backgroundColor: colors['success-100'],
      borderColor: colors['success-500'],
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
        color: colors['dark-900'],
      },
      error: {
        color: colors['dark-900'],
      },
      warning: {
        color: colors['dark-900'],
      },
      info: {
        color: colors['dark-900'],
      },
      success: {
        color: colors['dark-900'],
      },
    },
  }
}
