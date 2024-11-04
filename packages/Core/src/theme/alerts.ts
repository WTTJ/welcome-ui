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

  const getState = (color: 'red' | 'blue' | 'green' | 'orange') => ({
    backgroundColor: colors[`${color}-10`],
    borderColor: colors[`${color}-10`],
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
    danger: getState('red'),
    warning: getState('orange'),
    info: getState('blue'),
    success: getState('green'),
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
