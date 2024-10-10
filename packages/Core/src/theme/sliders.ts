import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeSliders = {
  default: CSSObject
  disabled: CSSObject
  focused: CSSObject
  output: CSSObject
  rangeInput: CSSObject
  selector: CSSObject
}

export const getSliders = (theme: WuiTheme): ThemeSliders => {
  const { borderWidths, colors } = theme
  return {
    default: {
      backgroundColor: colors['nude-400'],
      backgroundImage: `linear-gradient(${colors['primary-500']}, ${colors['primary-500']})`,
    },
    selector: {
      backgroundColor: colors['dark-900'],
      borderRadius: '50%',
      border: `${borderWidths.md} solid`,
      disabled: {
        backgroundColor: colors['nude-600'],
      },
    },
    output: {
      tooltip: {
        backgroundColor: colors['dark-900'],
        border: `${borderWidths.sm} solid ${colors['dark-700']}}`,
        color: colors['light-900'],
      },
    },
    focused: {
      outline: `${borderWidths.md} solid ${colors['primary-500']}`,
      disabled: {
        outline: 'none',
      },
    },
    disabled: {
      backgroundImage: `linear-gradient(${colors['nude-600']}, ${colors['nude-600']})`,
    },
    rangeInput: {
      disabled: {
        backgroundColor: colors['nude-600'],
      },
    },
  }
}
