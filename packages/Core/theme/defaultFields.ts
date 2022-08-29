import { CSSObject } from '@xstyled/styled-components'
import { Size } from '@welcome-ui/utils'

import { ThemeFocus } from './focus'
import { WuiTheme } from './types'

export type ThemeDefaultFields = {
  default: CSSObject
  sizes: Record<Size, CSSObject>
  iconPlacement: Record<Size, CSSObject>
  checkableField: {
    checked: CSSObject
    disabled: CSSObject
  }
  disabled: CSSObject
  placeholder: CSSObject
  focused: {
    default: CSSObject & ReturnType<ThemeFocus>
    error: CSSObject & ReturnType<ThemeFocus>
    warning: CSSObject & ReturnType<ThemeFocus>
    success: CSSObject & ReturnType<ThemeFocus>
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
      color: colors['dark-900'],
      fontSize: fontSizes.sm,
      /* Can't use 16 because that's a valid line-height value (16em) */
      lineHeight: '1rem',
      fontWeight: fontWeights.regular,
      backgroundColor: colors['light-900'],
      borderColor: colors.border,
      borderWidth: borderWidths.sm,
      borderStyle: 'solid',
      outline: 'none',
    },
    sizes: {
      xs: {
        height: toRem(24),
        padding: `${space.xs} ${space.md}`,
      },
      sm: {
        height: toRem(32),
        padding: `${space.sm} ${space.md}`,
      },
      md: {
        height: toRem(40),
        padding: `${space.md}`,
      },
      lg: {
        height: toRem(48),
        padding: `${space.lg} ${space.md}`,
      },
    },
    iconPlacement: {
      xs: {
        left: toRem(8),
        right: toRem(8),
      },
      sm: {
        left: toRem(12),
        right: toRem(12),
      },
      md: {
        left: toRem(12),
        right: toRem(12),
      },
      lg: {
        left: toRem(12),
        right: toRem(12),
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
      backgroundColor: colors['nude-400'],
      color: colors['nude-700'],
      cursor: 'not-allowed',
    },
    placeholder: {
      color: colors['dark-400'],
    },
    focused: {
      default: {
        ...focus(colors['primary-200']),
        borderColor: 'transparent',
      },
      error: { ...focus(colors['danger-300']) },
      warning: { ...focus(colors['warning-300']) },
      success: { ...focus(colors['success-300']) },
    },
    checkablelabel: {
      default: {
        fontWeight: fontWeights.regular,
      },
      checked: {
        color: colors['dark-200'],
        '-webkit-text-stroke': '0.04em',
      },
    },
    select: {
      default: {
        maxHeight: toRem(155),
      },
      existing: {
        color: colors['nude-400'],
        cursor: 'not-allowed',
      },
      highlighted: {
        backgroundColor: colors['nude-100'],
        cursor: 'default',
      },
      selectedAndHighlighted: {
        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08) 100%)',
      },
      selected: {
        color: colors['dark-200'],
        fontWeight: fontWeights.bold,
      },
      disabled: {
        color: colors['nude-600'],
        cursor: 'not-allowed',
      },
    },
    fieldset: {
      'border-width': '0',
    },
  }
}
