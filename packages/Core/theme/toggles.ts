import { CSSObject } from '@xstyled/system'

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
        width: toRem(34),
        height: toRem(18),
        borderRadius: toRem(9),
        backgroundColor: colors.light[900],
        borderColor: colors.border,
        borderWidth: borderWidths.sm,
        borderStyle: 'solid',
        marginTop: LINE_HEIGHT_ADJUSTMENTS,

        '&:focus': {
          borderColor: colors.primary[400],
          ...focus(),
        },
      },
      checked: {
        backgroundColor: colors.primary[400],
        borderColor: colors.primary[400],
      },
      disabled: {
        borderColor: colors.dark[100],
        backgroundColor: colors.dark[100],
      },
    },
    after: {
      default: {
        width: toRem(14),
        height: toRem(14),
        backgroundColor: colors.light[900],
        borderColor: colors.dark[400],
        borderWidth: borderWidths.sm,
        borderStyle: 'solid',
        borderRadius: '50%',
      },
      checked: {
        backgroundColor: colors.light[900],
        borderColor: colors.light[900],
      },
      disabled: {
        borderColor: 'transparent',
        backgroundColor: colors.dark[200],
      },
    },
  }
}
