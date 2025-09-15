import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@old/theme'

export type ThemeSliders = {
  default: CSSObject
  disabled: CSSObject
  focused: CSSObject
  output: CSSObject
  rangeInput: CSSObject
  selector: CSSObject
}

export const getSliders = (theme: ThemeValues): ThemeSliders => {
  const { borderWidths, colors } = theme
  return {
    default: {
      backgroundColor: colors['beige-40'],
      backgroundImage: `linear-gradient(${colors['primary-40']}, ${colors['primary-40']})`,
    },
    disabled: {
      backgroundImage: `linear-gradient(${colors['beige-60']}, ${colors['beige-60']})`,
    },
    focused: {
      disabled: {
        outline: 'none',
      },
      outline: `${borderWidths.md} solid ${colors['primary-40']}`,
    },
    output: {
      tooltip: {
        backgroundColor: colors['neutral-90'],
        border: `${borderWidths.sm} solid ${colors['neutral-70']}}`,
        color: colors['neutral-10'],
      },
    },
    rangeInput: {
      disabled: {
        backgroundColor: colors['beige-60'],
      },
    },
    selector: {
      backgroundColor: colors['neutral-90'],
      border: `${borderWidths.md} solid`,
      borderRadius: '50%',
      disabled: {
        backgroundColor: colors['beige-60'],
      },
    },
  }
}
