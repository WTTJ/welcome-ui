import { CSSObject } from '@xstyled/styled-components'
import { Size } from '@welcome-ui/utils'

import { ThemeFocus } from './focus'
import { WuiTheme } from './types'

export type ThemeDefaultFields = {
  default: CSSObject
  sizes: Record<Size, CSSObject>
  checkableField: {
    checked: CSSObject
    disabled: CSSObject
  }
  disabled: CSSObject
  placeholder: CSSObject
  focused: {
    default: CSSObject & ReturnType<ThemeFocus>
    error: ReturnType<ThemeFocus>
    warning: ReturnType<ThemeFocus>
  }
  checkablelabel: {
    default: CSSObject
    checked: CSSObject
  }
  select: {
    default: CSSObject
    existing: CSSObject
    highlighted: CSSObject
    selectedAndHighlighted: CSSObject
    selected: CSSObject
    disabled: CSSObject
  }
  fieldset: CSSObject
}

export const getDefaultFields = (theme: WuiTheme): ThemeDefaultFields => {
  const { borderWidths, colors, focus, fontSizes, fontWeights, space, toRem } = theme

  return {
    default: {
      color: colors.dark[900],
      fontSize: fontSizes.sm,
      /* Can't use 16 because that's a valid line-height value (16em) */
      lineHeight: '1rem',
      fontWeight: fontWeights.regular,
      backgroundColor: colors.light[900],
      borderColor: colors.border,
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      outline: 'none',
    },
    sizes: {
      sm: {
        height: toRem(32),
        padding: `${space.xs} ${space.md}`,
      },
      md: {
        height: toRem(36),
        padding: `${space.sm} ${space.md}`,
      },
      lg: {
        height: toRem(40),
        padding: `${space.md}`,
      },
    },
    checkableField: {
      checked: {
        color: 'white', // not hex color, only color from browser because is on a content svg
      },
      disabled: {
        opacity: 0.4,
      },
    },
    disabled: {
      backgroundColor: colors.nude[400],
      color: colors.nude[700],
      cursor: 'not-allowed',
    },
    placeholder: {
      color: colors.dark[400],
    },
    focused: {
      default: {
        ...focus(),
        borderColor: colors.primary[400],
      },
      error: focus(colors.danger[500]),
      warning: focus(colors.warning[500]),
    },
    checkablelabel: {
      default: {
        fontWeight: fontWeights.regular,
      },
      checked: {
        color: colors.dark[200],
        '-webkit-text-stroke': '0.04em',
      },
    },
    select: {
      default: {
        maxHeight: toRem(155),
      },
      existing: {
        color: colors.nude[400],
        cursor: 'not-allowed',
      },
      highlighted: {
        backgroundColor: colors.nude[100],
        cursor: 'default',
      },
      selectedAndHighlighted: {
        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08) 100%)',
      },
      selected: {
        color: colors.dark[200],
        fontWeight: fontWeights.bold,
      },
      disabled: {
        color: colors.nude[500],
        cursor: 'not-allowed',
      },
    },
    fieldset: {
      'border-width': '0',
    },
  }
}
