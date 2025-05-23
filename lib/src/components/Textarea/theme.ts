import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

export type ThemeTextareas = CSSObject

export const getTextareas = (theme: ThemeValues): ThemeTextareas => {
  const { space, toRem } = theme

  return {
    minHeight: toRem(130),
    padding: space.md,
  }
}
