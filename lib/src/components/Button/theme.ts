import { CSSObject } from '@xstyled/styled-components'

import { ThemeValues } from '../../theme'
import { ThemeFocus } from '../../theme/focus'
import { hexToRGBA } from '../../utils/hex-to-rgba'

type CommonAttributesButton = CSSObject

type SizeAttributesButton = CSSObject

type Variant = 'primary' | 'secondary' | 'tertiary' | 'ghost'
type Size = 'xs' | 'sm' | 'md' | 'lg'
type Icon = 'only' | 'default'

export type ThemeButtons = Record<Variant | 'danger', CommonAttributesButton> &
  Record<'hover', Record<Variant | 'danger', CommonAttributesButton>> &
  Record<'focus', Record<Variant | 'danger', unknown>> &
  Record<'active', Record<Variant | 'danger', CommonAttributesButton>> &
  Record<'disabled', CommonAttributesButton & { '&:focus': ReturnType<ThemeFocus> }> &
  Record<'sizes', Record<Size, SizeAttributesButton>> &
  Record<'icon', Record<Icon, Record<Size, string>>>

export const getButtons = (theme: ThemeValues): ThemeButtons => {
  const { colors, focus, fontWeights, radii, space, texts, toRem } = theme
  const defaults = {
    ...texts.xs,
    color: colors['neutral-10'],
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
    borderRadius: radii.md,
  }

  return {
    primary: {
      ...defaults,
      color: theme.colors['neutral-90'],
      backgroundColor: colors['primary-40'],
      borderColor: colors['primary-40'],
    },
    secondary: {
      ...defaults,
      backgroundColor: colors['neutral-90'],
      borderColor: colors['neutral-90'],
    },
    tertiary: {
      ...defaults,
      color: colors['neutral-90'],
      backgroundColor: 'transparent',
      borderColor: colors['neutral-90'],
    },
    ghost: {
      ...defaults,
      color: colors['neutral-90'],
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    danger: {
      primary: {
        color: colors['neutral-10'],
        backgroundColor: colors['red-70'],
        borderColor: colors['red-70'],
      },
      tertiary: {
        backgroundColor: 'transparent',
        color: colors['red-80'],
        borderColor: colors['red-80'],
      },
      ghost: {
        color: colors['red-80'],
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
    },
    hover: {
      primary: {
        backgroundColor: colors['primary-30'],
        borderColor: colors['primary-30'],
      },
      secondary: {
        backgroundColor: colors['neutral-70'],
        borderColor: 'transparent',
      },
      tertiary: {
        backgroundColor: hexToRGBA(colors['neutral-90'], 0.1),
      },
      ghost: {
        backgroundColor: hexToRGBA(colors['neutral-90'], 0.1),
      },
      danger: {
        primary: {
          backgroundColor: colors['red-60'],
          borderColor: colors['red-60'],
        },
        tertiary: {
          backgroundColor: colors['red-10'],
        },
        ghost: {
          backgroundColor: colors['red-10'],
        },
      },
    },
    focus: {
      primary: { ...focus(colors['primary-20']) },
      secondary: { ...focus(colors['neutral-40']) },
      tertiary: { ...focus(colors['neutral-40']) },
      ghost: { ...focus(colors['neutral-40']) },
      danger: {
        primary: { ...focus(colors['red-40']) },
        tertiary: { ...focus(colors['red-40']) },
        ghost: { ...focus(colors['red-40']) },
      },
    },
    active: {
      primary: {
        backgroundColor: colors['primary-10'],
        borderColor: colors['primary-10'],
      },
      secondary: {
        backgroundColor: colors['neutral-50'],
        borderColor: colors['neutral-50'],
      },
      tertiary: {
        backgroundColor: hexToRGBA(colors['neutral-90'], 0.4),
      },
      ghost: {
        backgroundColor: hexToRGBA(colors['neutral-90'], 0.4),
      },
      danger: {
        primary: {
          backgroundColor: colors['red-50'],
          borderColor: colors['red-50'],
        },
        tertiary: {
          backgroundColor: colors['red-20'],
        },
        ghost: {
          backgroundColor: colors['red-20'],
        },
      },
    },
    disabled: {
      ...defaults,
      color: colors['beige-70'],
      backgroundColor: colors['beige-40'],
      borderColor: colors['beige-40'],
      '&:focus': { ...focus(colors['beige-10']) },
    },
    sizes: {
      xs: {
        height: toRem(24),
        padding: `${space.xs} ${space.sm}`,
      },
      sm: {
        height: toRem(32),
        padding: `${space.sm} ${space.md}`,
      },
      md: {
        ...texts.sm,
        fontWeight: fontWeights.bold,
        height: toRem(40),
        padding: `${space.sm} ${space.lg}`,
      },
      lg: {
        ...texts.sm,
        fontWeight: fontWeights.bold,
        height: toRem(48),
        padding: `${space.md} ${space.xl}`,
      },
    },
    icon: {
      only: {
        xs: toRem(16),
        sm: toRem(16),
        md: toRem(16),
        lg: toRem(24),
      },
      default: {
        xs: toRem(12),
        sm: toRem(16),
        md: toRem(16),
        lg: toRem(16),
      },
    },
  }
}
