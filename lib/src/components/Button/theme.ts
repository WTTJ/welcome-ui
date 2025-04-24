import type { CSSObject } from '@xstyled/styled-components'

import type { ThemeValues } from '@/theme'

import type { ThemeFocus } from '../../theme/focus'
import { hexToRGBA } from '../../utils/hex-to-rgba'

export type Size = 'lg' | 'md' | 'sm' | 'xs'

export type ThemeButtons = Record<
  'active',
  Record<'ai' | 'danger' | Variant, CommonAttributesButton>
> &
  Record<'ai' | 'danger' | Variant, CommonAttributesButton> &
  Record<'disabled', CommonAttributesButton & { '&:focus': ReturnType<ThemeFocus> }> &
  Record<'focus', Record<'ai' | 'danger' | Variant, unknown>> &
  Record<'hover', Record<'ai' | 'danger' | Variant, CommonAttributesButton>> &
  Record<'icon', Record<Icon, Record<Size, string>>> &
  Record<'sizes', Record<Size, SizeAttributesButton>>

export type Variant = 'ghost' | 'primary' | 'secondary' | 'tertiary'
type CommonAttributesButton = CSSObject
type Icon = 'default' | 'only'

type SizeAttributesButton = CSSObject

export const getButtons = (theme: ThemeValues): ThemeButtons => {
  const { colors, focus, fontWeights, radii, space, texts, toRem } = theme
  const defaults = {
    ...texts.xs,
    borderRadius: radii.md,
    color: colors['neutral-10'],
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
  }

  return {
    active: {
      ai: {
        ghost: {
          backgroundColor: colors['violet-30'],
        },
        primary: {
          backgroundColor: colors['violet-40'],
          borderColor: colors['violet-40'],
        },
        tertiary: {
          backgroundColor: colors['violet-30'],
        },
      },
      danger: {
        ghost: {
          backgroundColor: colors['red-20'],
        },
        primary: {
          backgroundColor: colors['red-50'],
          borderColor: colors['red-50'],
        },
        tertiary: {
          backgroundColor: colors['red-20'],
        },
      },
      ghost: {
        backgroundColor: hexToRGBA(colors['neutral-90'], 0.4),
      },
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
    },
    ai: {
      ghost: {
        backgroundColor: colors['neutral-10'],
        borderColor: 'transparent',
        color: colors['violet-70'],
      },
      primary: {
        backgroundColor: colors['violet-70'],
        borderColor: 'transparent',
        color: colors['neutral-10'],
      },
      tertiary: {
        backgroundColor: 'neutral-10',
        borderColor: colors['violet-70'],
        color: colors['violet-70'],
      },
    },
    danger: {
      ghost: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: colors['red-80'],
      },
      primary: {
        backgroundColor: colors['red-70'],
        borderColor: colors['red-70'],
        color: colors['neutral-10'],
      },
      tertiary: {
        backgroundColor: 'transparent',
        borderColor: colors['red-80'],
        color: colors['red-80'],
      },
    },
    disabled: {
      ...defaults,
      '&:focus': { ...focus(colors['beige-10']) },
      backgroundColor: colors['beige-40'],
      borderColor: colors['beige-40'],
      color: colors['beige-70'],
    },
    focus: {
      ai: {
        ghost: { ...focus(colors['violet-50']) },
        primary: { ...focus(colors['violet-50']) },
        tertiary: { ...focus(colors['violet-50']) },
      },
      danger: {
        ghost: { ...focus(colors['red-40']) },
        primary: { ...focus(colors['red-40']) },
        tertiary: { ...focus(colors['red-40']) },
      },
      ghost: { ...focus(colors['neutral-40']) },
      primary: { ...focus(colors['primary-20']) },
      secondary: { ...focus(colors['neutral-40']) },
      tertiary: { ...focus(colors['neutral-40']) },
    },
    ghost: {
      ...defaults,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: colors['neutral-90'],
    },
    hover: {
      ai: {
        ghost: {
          backgroundColor: colors['violet-10'],
        },
        primary: {
          backgroundColor: colors['violet-60'],
          borderColor: 'transparent',
        },
        tertiary: {
          backgroundColor: colors['violet-10'],
        },
      },
      danger: {
        ghost: {
          backgroundColor: colors['red-10'],
        },
        primary: {
          backgroundColor: colors['red-60'],
          borderColor: colors['red-60'],
        },
        tertiary: {
          backgroundColor: colors['red-10'],
        },
      },
      ghost: {
        backgroundColor: hexToRGBA(colors['neutral-90'], 0.1),
      },
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
    },
    icon: {
      default: {
        lg: toRem(16),
        md: toRem(16),
        sm: toRem(16),
        xs: toRem(12),
      },
      only: {
        lg: toRem(24),
        md: toRem(16),
        sm: toRem(16),
        xs: toRem(16),
      },
    },
    primary: {
      ...defaults,
      backgroundColor: colors['primary-40'],
      borderColor: colors['primary-40'],
      color: theme.colors['neutral-90'],
    },
    secondary: {
      ...defaults,
      backgroundColor: colors['neutral-90'],
      borderColor: colors['neutral-90'],
    },
    sizes: {
      lg: {
        ...texts.sm,
        fontWeight: fontWeights.bold,
        height: toRem(48),
        padding: `${space.md} ${space.xl}`,
      },
      md: {
        ...texts.sm,
        fontWeight: fontWeights.bold,
        height: toRem(40),
        padding: `${space.sm} ${space.lg}`,
      },
      sm: {
        height: toRem(32),
        padding: `${space.sm} ${space.md}`,
      },
      xs: {
        height: toRem(24),
        padding: `${space.xs} ${space.sm}`,
      },
    },
    tertiary: {
      ...defaults,
      backgroundColor: 'transparent',
      borderColor: colors['neutral-90'],
      color: colors['neutral-90'],
    },
  }
}
