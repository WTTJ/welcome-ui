import type { CSSObject } from '@xstyled/styled-components'

import type { DefaultFieldStylesProps } from '@old/utils'

import type { ThemeValues } from '.'

export type ThemeDefaultFields = {
  checkableField: {
    checked: CSSObject
    disabled: CSSObject
  }
  checkablelabel: {
    checked: CSSObject
    default: CSSObject
  }
  default: CSSObject
  disabled: CSSObject
  fieldset: CSSObject
  focused: VariantsTheme & {
    default: CSSObject
  }
  hover: CSSObject
  iconPlacement: Record<DefaultFieldStylesProps['size'], CSSObject>
  placeholder: CSSObject
  select: {
    default: CSSObject
    disabled: CSSObject
    existing: CSSObject
    highlighted: CSSObject
    selected: CSSObject
    selectedAndHighlighted: CSSObject
  }
  sizes: Record<DefaultFieldStylesProps['size'], CSSObject>
  variants: VariantsTheme
}

type VariantsTheme = {
  danger: CSSObject
  success: CSSObject
  warning: CSSObject
}

export const getDefaultFields = (theme: ThemeValues): ThemeDefaultFields => {
  const { borderWidths, colors, focus, fontSizes, fontWeights, radii, space, toRem } = theme

  return {
    checkableField: {
      checked: {
        color: 'neutral-90', // not hex color, only color from browser because is on a content svg
      },
      disabled: {
        opacity: 0.4,
      },
    },
    checkablelabel: {
      checked: {
        '-webkit-text-stroke': '0.04em',
        color: colors['neutral-90'],
      },
      default: {},
    },
    default: {
      backgroundColor: colors['neutral-10'],
      borderColor: colors['neutral-30'],
      borderRadius: radii.md,
      borderStyle: 'solid',
      borderWidth: borderWidths.sm,
      color: colors['neutral-90'],
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      /* Can't use 16 because that's a valid line-height value (16em) */
      lineHeight: '1rem',
      outline: 'none',
    },
    disabled: {
      backgroundColor: colors['beige-40'],
      color: colors['beige-70'],
      cursor: 'not-allowed',
    },
    fieldset: {
      'border-width': '0',
    },
    focused: {
      danger: { ...focus(colors['red-30']) },
      default: {
        ...focus(colors['primary-20']),
        borderColor: colors['primary-40'],
      },
      success: { ...focus(colors['green-30']) },
      warning: { ...focus(colors['orange-20']) },
    },
    hover: {
      default: {
        borderColor: colors['neutral-40'],
      },
      transparency: {
        borderColor: colors['neutral-20'],
      },
    },
    iconPlacement: {
      lg: {
        left: toRem(12),
        right: toRem(12),
      },
      md: {
        left: toRem(12),
        right: toRem(12),
      },
      sm: {
        left: toRem(12),
        right: toRem(12),
      },
      xs: {
        left: toRem(8),
        right: toRem(8),
      },
    },
    placeholder: {
      color: colors['neutral-60'],
    },
    select: {
      default: {
        borderRadius: radii.md,
        maxHeight: toRem(155),
      },
      disabled: {
        color: colors['beige-60'],
        cursor: 'not-allowed',
      },
      existing: {
        color: colors['beige-40'],
        cursor: 'not-allowed',
      },
      highlighted: {
        backgroundColor: colors['beige-20'],
        cursor: 'default',
      },
      selected: {
        color: colors['neutral-90'],
        fontWeight: fontWeights.bold,
      },
      selectedAndHighlighted: {
        backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08) 100%)',
      },
    },
    sizes: {
      lg: {
        height: toRem(48),
        paddingBottom: space.lg,
        paddingLeft: space.md,
        paddingRight: space.md,
        paddingTop: space.lg,
      },
      md: {
        height: toRem(40),
        paddingBottom: space.md,
        paddingLeft: space.md,
        paddingRight: space.md,
        paddingTop: space.md,
      },
      sm: {
        height: toRem(32),
        paddingBottom: space.sm,
        paddingLeft: space.md,
        paddingRight: space.md,
        paddingTop: space.sm,
      },
      xs: {
        height: toRem(24),
        paddingBottom: space.xs,
        paddingLeft: space.sm,
        paddingRight: space.sm,
        paddingTop: space.xs,
      },
    },
    variants: {
      danger: {
        borderColor: colors['red-70'],
      },
      success: {
        borderColor: colors['green-60'],
      },
      warning: {
        borderColor: colors['orange-60'],
      },
    },
  }
}
