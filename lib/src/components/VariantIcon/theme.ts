import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

export type Size = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl'
export type ThemeVariantIcon = Record<Variant, CSSObject>
export type Variant = 'ai' | 'danger' | 'default' | 'info' | 'success' | 'warning'

export const getVariantIcon = (theme: ThemeValues): ThemeVariantIcon => {
  const { colors } = theme

  return {
    ai: {
      color: colors['violet-70'],
    },
    danger: {
      color: colors['red-70'],
    },
    default: {
      color: colors['neutral-90'],
    },
    info: {
      color: colors['blue-60'],
    },
    success: {
      color: colors['green-60'],
    },
    warning: {
      color: colors['orange-60'],
    },
  }
}
