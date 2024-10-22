import { CSSObject } from '@xstyled/styled-components'
import { hexToRGBA } from '@welcome-ui/utils'

import { ThemeFocus } from './focus'
import { WuiTheme } from './types'

type CommonAttributesButton = CSSObject

type SizeAttributesButton = CSSObject

type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'primary-success'
  | 'secondary-success'
  | 'primary-warning'
  | 'secondary-warning'
  | 'primary-danger'
  | 'secondary-danger'
  | 'primary-info'
  | 'secondary-info'
  | 'ghost'

type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg'
type Icon = 'only' | 'default'

export type ThemeButtons = Record<Variant, CommonAttributesButton> &
  Record<'hover', Record<Variant, CommonAttributesButton>> &
  Record<'focus', Record<Variant, unknown>> &
  Record<'active', Record<Variant, CommonAttributesButton>> &
  Record<'disabled', CommonAttributesButton & { '&:focus': ReturnType<ThemeFocus> }> &
  Record<'sizes', Record<Size, SizeAttributesButton>> &
  Record<'icon', Record<Icon, Record<Size, string>>>

export const getButtons = (theme: WuiTheme): ThemeButtons => {
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
    'primary-success': {
      ...defaults,
      backgroundColor: colors['success-50'],
      borderColor: colors['success-50'],
    },
    'secondary-success': {
      ...defaults,
      color: colors['success-50'],
      backgroundColor: colors['neutral-10'],
      borderColor: colors['success-50'],
    },
    'primary-warning': {
      ...defaults,
      backgroundColor: colors['warning-50'],
      borderColor: colors['warning-50'],
    },
    'secondary-warning': {
      ...defaults,
      color: colors['warning-50'],
      backgroundColor: colors['neutral-10'],
      borderColor: colors['warning-50'],
    },
    'primary-danger': {
      ...defaults,
      backgroundColor: colors['danger-50'],
      borderColor: colors['danger-50'],
    },
    'secondary-danger': {
      ...defaults,
      color: colors['danger-50'],
      backgroundColor: colors['neutral-10'],
      borderColor: colors['danger-50'],
    },
    'primary-info': {
      ...defaults,
      backgroundColor: colors['information-50'],
      borderColor: colors['information-50'],
    },
    'secondary-info': {
      ...defaults,
      color: colors['information-50'],
      backgroundColor: colors['neutral-10'],
      borderColor: colors['information-50'],
    },
    ghost: {
      ...defaults,
      color: colors['neutral-90'],
      backgroundColor: 'transparent',
      borderColor: 'transparent',
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
        backgroundColor: colors['neutral-30'],
      },
      'primary-success': {
        backgroundColor: colors['success-40'],
        borderColor: colors['success-40'],
      },
      'secondary-success': {
        backgroundColor: hexToRGBA(colors['success-50'], 0.1),
      },
      'primary-warning': {
        backgroundColor: colors['warning-40'],
        borderColor: colors['warning-40'],
      },
      'secondary-warning': {
        backgroundColor: colors['warning-10'],
      },
      'primary-danger': {
        backgroundColor: colors['danger-40'],
        borderColor: colors['danger-40'],
      },
      'secondary-danger': {
        backgroundColor: colors['danger-10'],
      },
      'primary-info': {
        backgroundColor: colors['information-40'],
        borderColor: colors['information-40'],
      },
      'secondary-info': {
        backgroundColor: colors['information-10'],
      },
      ghost: {
        backgroundColor: colors.border,
      },
    },
    focus: {
      primary: { ...focus(colors['primary-40'], 0.5) },
      secondary: { ...focus(colors['neutral-60']) },
      tertiary: { ...focus(colors['neutral-60']) },
      ghost: { ...focus(colors['neutral-30']) },
      'primary-success': { ...focus(colors['success-50'], 0.5) },
      'secondary-success': { ...focus(colors['success-50'], 0.5) },
      'primary-warning': { ...focus(colors['warning-50'], 0.5) },
      'secondary-warning': { ...focus(colors['warning-50'], 0.5) },
      'primary-danger': { ...focus(colors['danger-50'], 0.5) },
      'secondary-danger': { ...focus(colors['danger-50'], 0.5) },
      'primary-info': { ...focus(colors['information-50'], 0.5) },
      'secondary-info': { ...focus(colors['information-50'], 0.5) },
    },
    active: {
      primary: {
        backgroundColor: colors['primary-10'],
        borderColor: colors['primary-10'],
      },
      secondary: {
        backgroundColor: colors['neutral-30'],
        borderColor: colors['neutral-30'],
      },
      tertiary: {
        backgroundColor: colors['neutral-50'],
      },
      'primary-success': {
        backgroundColor: colors['success-30'],
        borderColor: colors['success-30'],
      },
      'secondary-success': {
        backgroundColor: hexToRGBA(colors['success-50'], 0.4),
      },
      'primary-warning': {
        backgroundColor: colors['warning-30'],
        borderColor: colors['warning-30'],
      },
      'secondary-warning': {
        backgroundColor: hexToRGBA(colors['warning-50'], 0.4),
      },
      'primary-danger': {
        backgroundColor: colors['danger-30'],
        borderColor: colors['danger-30'],
      },
      'secondary-danger': {
        backgroundColor: hexToRGBA(colors['danger-50'], 0.4),
      },
      'primary-info': {
        backgroundColor: colors['information-30'],
        borderColor: colors['information-30'],
      },
      'secondary-info': {
        backgroundColor: hexToRGBA(colors['information-50'], 0.4),
      },
      ghost: {
        backgroundColor: colors['neutral-50'],
      },
    },
    disabled: {
      ...defaults,
      color: colors['beige-70'],
      backgroundColor: colors['beige-40'],
      borderColor: colors['beige-40'],
      '&:focus': { ...focus(colors['beige-40'], 0.5) },
    },
    sizes: {
      xxs: {
        height: toRem(16),
        padding: `${space.xxs} ${space.xs}`,
      },
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
        xxs: toRem(16),
        xs: toRem(16),
        sm: toRem(16),
        md: toRem(16),
        lg: toRem(24),
      },
      default: {
        xxs: toRem(12),
        xs: toRem(12),
        sm: toRem(16),
        md: toRem(16),
        lg: toRem(16),
      },
    },
  }
}
