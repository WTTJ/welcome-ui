import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

export type ThemeAccordions = {
  content: CSSObject
  icon: CSSObject
  padding: string
  title: CSSObject
  wrapper: CSSObject
}

export const getAccordions = (theme: ThemeValues): ThemeAccordions => {
  const { borderWidths, colors, fontSizes, radii, space, texts, transitions } = theme

  return {
    content: {
      fontSize: fontSizes.sm,
    },
    icon: {
      color: colors['neutral-90'],
    },
    padding: space.lg,
    title: texts.h5,
    wrapper: {
      backgroundColor: colors['neutral-10'],
      border: `${borderWidths.sm} solid ${colors['neutral-30']}`,
      borderRadius: radii.md,
      transition: transitions.medium,
    },
  }
}
