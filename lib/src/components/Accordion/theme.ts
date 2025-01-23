import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '@/theme'

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
    padding: space.lg,
    wrapper: {
      backgroundColor: colors['neutral-10'],
      transition: transitions.medium,
      border: `${borderWidths.sm} solid ${colors['neutral-30']}`,
      borderRadius: radii.md,
    },
    icon: {
      color: colors['neutral-90'],
    },
    content: {
      fontSize: fontSizes.sm,
    },
    title: texts.h5,
  }
}
