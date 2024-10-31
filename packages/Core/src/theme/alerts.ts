import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

type State = 'default' | 'danger' | 'warning' | 'info' | 'success' | 'beige'

type Sizes = 'sm' | 'md'

type AttributesState = CSSObject

export type ThemeAlerts = {
  default: CSSObject
  sizes: Record<Sizes, CSSObject>
} & Record<State, AttributesState>

export const getAlerts = (theme: WuiTheme): ThemeAlerts => {
  const { borderWidths, colors, fontSizes, radii, space } = theme

  const getState = (state: 'danger' | 'info' | 'success' | 'warning') => ({
    backgroundColor: colors[`${state}-10`],
    borderColor: colors[`${state}-10`],
  })

  return {
    default: {
      backgroundColor: colors['neutral-10'],
      borderColor: colors['neutral-30'],
      borderRadius: radii.lg,
      borderStyle: 'solid',
      borderWidth: borderWidths.sm,
      color: colors['neutral-90'],
      fontSize: fontSizes.sm,
    },
    danger: getState('danger'),
    warning: getState('warning'),
    info: getState('info'),
    success: getState('success'),
    beige: { backgroundColor: colors['beige-20'], borderColor: colors['beige-20'] },
    sizes: {
      sm: {
        padding: space.lg,
      },
      md: {
        padding: space.xl,
      },
    },
  }
}
