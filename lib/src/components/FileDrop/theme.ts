import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '@/theme'

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
      minHeight: toRem(200),
      borderStyle: 'dashed',
    },
    dragAccept: {},
    dragReject: {},
    disabled: {
      backgroundColor: colors['beige-30'],
    },
  }
}
