import { CSSObject } from '@xstyled/system'
import { hexToRGBA } from '@welcome-ui/utils'

import { ThemeFocus } from './focus'
import { WuiTheme } from './types'
import { ThemeIcons } from './icons'

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

type Size = 'xs' | 'sm' | 'md' | 'lg'

export type ThemeIconsButton = {
  iconOnly: Omit<ThemeIcons, 'xl' | 'xxl'>
  default: Omit<ThemeIcons, 'xl' | 'xxl'>
}

export const getIconsButton = ({ toRem }: WuiTheme): ThemeIconsButton => ({
  iconOnly: {
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
})

export type ThemeButtons = Record<Variant, CommonAttributesButton> &
  Record<'hover', Record<Variant, CommonAttributesButton>> &
  Record<'focus', Record<Variant, unknown>> &
  Record<'active', Record<Variant, CommonAttributesButton>> &
  Record<'disabled', CommonAttributesButton & { '&:focus': ReturnType<ThemeFocus> }> &
  Record<'sizes', Record<Size, SizeAttributesButton>>

export const getButtons = (theme: WuiTheme): ThemeButtons => {
  const { colors, focus, fontSizes, fontWeights, radii, space, toRem } = theme
  const defaults = {
    color: colors.light[900],
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.bold,
    letterSpacing: 0,
    borderRadius: radii.md,
  }

  return {
    primary: {
      ...defaults,
      backgroundColor: colors.primary[400],
      borderColor: colors.primary[400],
    },
    secondary: {
      ...defaults,
      backgroundColor: colors.dark[900],
      borderColor: colors.dark[900],
    },
    tertiary: {
      ...defaults,
      color: colors.dark[900],
      backgroundColor: 'transparent',
      borderColor: colors.dark[900],
    },
    'primary-success': {
      ...defaults,
      backgroundColor: colors.success[500],
      borderColor: colors.success[500],
    },
    'secondary-success': {
      ...defaults,
      color: colors.success[500],
      backgroundColor: colors.light[900],
      borderColor: colors.success[500],
    },
    'primary-warning': {
      ...defaults,
      backgroundColor: colors.warning[500],
      borderColor: colors.warning[500],
    },
    'secondary-warning': {
      ...defaults,
      color: colors.warning[500],
      backgroundColor: colors.light[900],
      borderColor: colors.warning[500],
    },
    'primary-danger': {
      ...defaults,
      backgroundColor: colors.danger[500],
      borderColor: colors.danger[500],
    },
    'secondary-danger': {
      ...defaults,
      color: colors.danger[500],
      backgroundColor: colors.light[900],
      borderColor: colors.danger[500],
    },
    'primary-info': {
      ...defaults,
      backgroundColor: colors.info[500],
      borderColor: colors.info[500],
    },
    'secondary-info': {
      ...defaults,
      color: colors.info[500],
      backgroundColor: colors.light[900],
      borderColor: colors.info[500],
    },
    ghost: {
      ...defaults,
      color: colors.dark[900],
      backgroundColor: colors.light[900],
      borderColor: colors.light[900],
    },
    hover: {
      primary: {
        backgroundColor: colors.primary[200],
        borderColor: colors.primary[200],
      },
      secondary: {
        backgroundColor: colors.dark[500],
        borderColor: colors.dark[500],
      },
      tertiary: {
        backgroundColor: colors.dark[100],
      },
      'primary-success': {
        backgroundColor: colors.success[400],
        borderColor: colors.success[400],
      },
      'secondary-success': {
        backgroundColor: hexToRGBA(colors.success[500], 0.1),
      },
      'primary-warning': {
        backgroundColor: colors.warning[400],
        borderColor: colors.warning[400],
      },
      'secondary-warning': {
        backgroundColor: colors.warning[100],
      },
      'primary-danger': {
        backgroundColor: colors.danger[400],
        borderColor: colors.danger[400],
      },
      'secondary-danger': {
        backgroundColor: colors.danger[100],
      },
      'primary-info': {
        backgroundColor: colors.info[400],
        borderColor: colors.info[400],
      },
      'secondary-info': {
        backgroundColor: colors.info[100],
      },
      ghost: {
        backgroundColor: colors.border,
      },
    },
    focus: {
      primary: focus(),
      secondary: focus(colors.dark[400]),
      tertiary: focus(colors.dark[900]),
      ghost: focus(colors.dark[100]),
      'primary-success': focus(colors.success[500]),
      'secondary-success': focus(colors.success[500]),
      'primary-warning': focus(colors.warning[500]),
      'secondary-warning': focus(colors.warning[500]),
      'primary-danger': focus(colors.danger[500]),
      'secondary-danger': focus(colors.danger[500]),
      'primary-info': focus(colors.info[500]),
      'secondary-info': focus(colors.info[500]),
    },
    active: {
      primary: {
        backgroundColor: colors.primary[100],
        borderColor: colors.primary[100],
      },
      secondary: {
        backgroundColor: colors.dark[200],
        borderColor: colors.dark[200],
      },
      tertiary: {
        backgroundColor: colors.dark[400],
      },
      'primary-success': {
        backgroundColor: colors.success[300],
        borderColor: colors.success[300],
      },
      'secondary-success': {
        backgroundColor: hexToRGBA(colors.success[500], 0.4),
      },
      'primary-warning': {
        backgroundColor: colors.warning[300],
        borderColor: colors.warning[300],
      },
      'secondary-warning': {
        backgroundColor: hexToRGBA(colors.warning[500], 0.4),
      },
      'primary-danger': {
        backgroundColor: colors.danger[300],
        borderColor: colors.danger[300],
      },
      'secondary-danger': {
        backgroundColor: hexToRGBA(colors.danger[500], 0.4),
      },
      'primary-info': {
        backgroundColor: colors.info[300],
        borderColor: colors.info[300],
      },
      'secondary-info': {
        backgroundColor: hexToRGBA(colors.info[500], 0.4),
      },
      ghost: {
        backgroundColor: colors.dark[400],
      },
    },
    disabled: {
      ...defaults,
      color: colors.nude[700],
      backgroundColor: colors.nude[400],
      borderColor: colors.nude[400],
      '&:focus': focus(colors.nude[400]),
    },
    sizes: {
      xs: {
        height: toRem(24),
        padding: `${space.xs} ${space.sm}`,
        lineHeight: toRem(16),
      },
      sm: {
        height: toRem(32),
        padding: `${space.sm} ${space.md}`,
        lineHeight: toRem(16),
      },
      md: {
        height: toRem(40),
        padding: `${space.sm} ${space.lg}`,
        fontSize: fontSizes.sm,
        lineHeight: toRem(24),
      },
      lg: {
        height: toRem(48),
        padding: `${space.md} ${space.xl}`,
        fontSize: fontSizes.md,
        lineHeight: toRem(24),
      },
    },
  }
}
