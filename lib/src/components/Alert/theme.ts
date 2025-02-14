import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '@/theme'

export type Variant = 'default' | 'danger' | 'warning' | 'info' | 'success' | 'beige' | 'ai'

export type Size = 'sm' | 'md'

type AttributesState = CSSObject

export type ThemeAlerts = {
  default: CSSObject
  sizes: Record<Size, CSSObject>
  title: {
    default: CSSObject
    sizes: Record<Size, CSSObject>
  }
} & Record<Variant, AttributesState>

export const getAlerts = (theme: ThemeValues): ThemeAlerts => {
  const { borderWidths, colors, fontSizes, fontWeights, radii, space } = theme

  const getState = (color: 'red' | 'blue' | 'green' | 'orange') => ({
    backgroundColor: colors[`${color}-10`],
    borderColor: colors[`${color}-10`],
    color: colors[`${color}-90`],
  })

  return {
    default: {
      backgroundColor: colors['neutral-10'],
      borderColor: colors['neutral-30'],
      borderRadius: radii.lg,
      borderStyle: 'solid',
      borderWidth: borderWidths.sm,
      color: colors['neutral-80'],
      fontSize: fontSizes.sm,
    },
    title: {
      default: {
        color: colors['neutral-90'],
        fontWeight: fontWeights['medium'],
      },
      sizes: {
        sm: {
          marginBottom: space.xs,
        },
        md: {
          marginBottom: space.sm,
        },
      },
    },
    danger: getState('red'),
    warning: getState('orange'),
    info: getState('blue'),
    success: getState('green'),
    beige: {
      backgroundColor: colors['beige-20'],
      borderColor: colors['beige-20'],
      color: colors['beige-80'],
    },
    ai: {
      backgroundColor: colors['violet-10'],
      color: colors['violet-90'],
      borderColor: colors['violet-10'],
    },
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
