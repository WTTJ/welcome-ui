import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

// To allow for line-height of text in label
const LINE_HEIGHT_ADJUSTMENTS = '0.15rem'

type State = 'default' | 'checked' | 'disabled'

export type ThemeToggles = {
  item: Record<State, CSSObject>
  after: Record<State, CSSObject>
}

export const getToggles = (theme: WuiTheme): ThemeToggles => {
  const { borderWidths, colors, focus, toRem } = theme

  return {
    item: {
      default: {
        width: toRem(26),
        height: toRem(16),
        borderRadius: toRem(9),
        backgroundColor: colors['light-900'],
        borderColor: colors.border,
        borderWidth: borderWidths.sm,
        borderStyle: 'solid',
        marginTop: LINE_HEIGHT_ADJUSTMENTS,

        '&:focus': {
          borderColor: colors['primary-200'],
          ...focus(colors['primary-200']),
        },
      },
      checked: {
        backgroundColor: colors['primary-500'],
        borderColor: colors['primary-500'],
      },
      disabled: {
        borderColor: colors['nude-600'],
        backgroundColor: colors['nude-400'],
      },
    },
    after: {
      default: {
        width: toRem(12),
        height: toRem(12),
        backgroundColor: colors['light-900'],
        borderColor: colors['dark-400'],
        borderWidth: borderWidths.sm,
        borderStyle: 'solid',
        borderRadius: '50%',
      },
      checked: {
        backgroundColor: colors['light-900'],
        borderColor: colors['light-900'],
      },
      disabled: {
        borderColor: 'transparent',
        backgroundColor: colors['nude-600'],
      },
    },
  }
}
