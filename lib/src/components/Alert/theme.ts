import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

// eslint-disable-next-line perfectionist/sort-union-types
export type Size = 'sm' | 'md'

export type ThemeAlerts = Record<Variant, AttributesState> & {
  default: CSSObject
  sizes: Record<Size, CSSObject>
  title: {
    default: CSSObject
    sizes: Record<Size, CSSObject>
  }
}

export type Variant = 'ai' | 'beige' | 'danger' | 'default' | 'info' | 'success' | 'warning'

type AttributesState = CSSObject

export const getAlerts = (theme: ThemeValues): ThemeAlerts => {
  const { borderWidths, colors, fontSizes, fontWeights, radii, space } = theme

  const getState = (color: 'blue' | 'green' | 'orange' | 'red') => ({
    backgroundColor: colors[`${color}-10`],
    borderColor: colors[`${color}-10`],
    color: colors[`${color}-90`],
  })

  return {
    ai: {
      backgroundColor: colors['violet-10'],
      borderColor: colors['violet-10'],
      color: colors['violet-90'],
    },
    beige: {
      backgroundColor: colors['beige-20'],
      borderColor: colors['beige-20'],
      color: colors['beige-80'],
    },
    danger: getState('red'),
    default: {
      backgroundColor: colors['neutral-10'],
      borderColor: colors['neutral-30'],
      borderRadius: radii.lg,
      borderStyle: 'solid',
      borderWidth: borderWidths.sm,
      color: colors['neutral-80'],
      fontSize: fontSizes.sm,
    },
    info: getState('blue'),
    sizes: {
      md: {
        padding: space.xl,
      },
      sm: {
        padding: space.lg,
      },
    },
    success: getState('green'),
    title: {
      default: {
        color: colors['neutral-90'],
        fontWeight: fontWeights['medium'],
      },
      sizes: {
        md: {
          marginBottom: space.sm,
        },
        sm: {
          marginBottom: space.xs,
        },
      },
    },
    warning: getState('orange'),
  }
}
