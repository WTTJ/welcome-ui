import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

export type ThemeFileDrops = {
  default: CSSObject
  disabled: CSSObject
  dragAccept: Record<string, unknown>
  dragReject: Record<string, unknown>
}

export const getFileDrops = (theme: ThemeValues): ThemeFileDrops => {
  const { colors, toRem } = theme

  return {
    default: {
      borderStyle: 'dashed',
      minHeight: toRem(200),
    },
    disabled: {
      backgroundColor: colors['beige-30'],
    },
    dragAccept: {},
    dragReject: {},
  }
}
