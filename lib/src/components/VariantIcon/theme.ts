import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '@/theme'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type Variant = 'danger' | 'warning' | 'success' | 'info' | 'default' | 'ai'
export type ThemeVariantIcon = Record<Variant, CSSObject>

export const getVariantIcon = (theme: ThemeValues): ThemeVariantIcon => {
  const { colors } = theme

  return {
    default: {
      color: colors['neutral-90'],
    },
    danger: {
      color: colors['red-70'],
    },
    success: {
      color: colors['green-60'],
    },
    warning: {
      color: colors['orange-60'],
    },
    info: {
      color: colors['blue-60'],
    },
    ai: {
      color: colors['violet-70'],
    },
  }
}
