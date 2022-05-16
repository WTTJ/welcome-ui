import { CSSObject } from '@xstyled/system'

import { ThemeFocus } from './focus'
import { WuiTheme } from './types'

type CommonAttributesButton = CSSObject

type SizeAttributesButton = CSSObject

type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'tertiary-negative'
  | 'primary-success'
  | 'secondary-success'
  | 'primary-warning'
  | 'secondary-warning'
  | 'primary-danger'
  | 'secondary-danger'
  | 'primary-info'
  | 'secondary-info'
  | 'quaternary'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

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
    'tertiary-negative': {
      ...defaults,
      backgroundColor: 'transparent',
      borderColor: colors.light[900],
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
    quaternary: {
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
      'tertiary-negative': {
        backgroundColor: colors.light[100],
      },
      'primary-success': {
        backgroundColor: colors.success[200],
        borderColor: colors.success[200],
      },
      'secondary-success': {
        backgroundColor: colors.success[100],
        borderColor: colors.success[500],
      },
      'primary-warning': {
        backgroundColor: colors.warning[200],
        borderColor: colors.warning[200],
      },
      'secondary-warning': {
        backgroundColor: colors.warning[100],
        borderColor: colors.warning[500],
      },
      'primary-danger': {
        backgroundColor: colors.danger[200],
        borderColor: colors.danger[200],
      },
      'secondary-danger': {
        backgroundColor: colors.danger[100],
        borderColor: colors.danger[500],
      },
      'primary-info': {
        backgroundColor: colors.info[200],
        borderColor: colors.info[200],
      },
      'secondary-info': {
        backgroundColor: colors.info[100],
        borderColor: colors.info[500],
      },
      quaternary: {
        backgroundColor: colors.border,
        borderColor: colors.border,
      },
    },
    focus: {
      primary: focus(),
      secondary: focus(colors.dark[900]),
      tertiary: focus(colors.dark[900]),
      'tertiary-negative': focus(colors.light[900]),
      quaternary: focus(colors.dark[100]),
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
        backgroundColor: colors.primary[700],
        borderColor: colors.primary[700],
      },
      secondary: {
        backgroundColor: colors.dark[200],
        borderColor: colors.dark[200],
      },
      tertiary: {
        backgroundColor: colors.dark[400],
      },
      'tertiary-negative': {
        backgroundColor: colors.light[400],
      },
      'primary-success': {
        backgroundColor: colors.success[500],
        borderColor: colors.success[500],
      },
      'secondary-success': {
        backgroundColor: colors.success[500],
        borderColor: colors.success[500],
      },
      'primary-warning': {
        backgroundColor: colors.warning[500],
        borderColor: colors.warning[500],
      },
      'secondary-warning': {
        color: colors.warning[500],
        borderColor: colors.warning[500],
      },
      'primary-danger': {
        backgroundColor: colors.danger[500],
        borderColor: colors.danger[500],
      },
      'secondary-danger': {
        color: colors.danger[500],
        borderColor: colors.danger[500],
      },
      'primary-info': {
        backgroundColor: colors.info[500],
        borderColor: colors.info[500],
      },
      'secondary-info': {
        color: colors.info[500],
        borderColor: colors.info[500],
      },
      quaternary: {
        backgroundColor: colors.light[700],
        borderColor: colors.light[700],
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
        height: toRem(20),
        padding: `0 ${space.xxs}`,
      },
      sm: {
        height: toRem(34),
        padding: `0 ${space.md}`,
        fontSize: toRem(),
      },
      md: {
        height: toRem(42),
        padding: `0 ${space.lg}`,
        fontSize: fontSizes.sm,
      },
      lg: {
        height: toRem(49),
        padding: `0 ${space.xl}`,
        fontSize: fontSizes.md,
      },
      xl: {
        height: toRem(70),
        padding: `0 ${space.xxl}`,
        fontSize: fontSizes.lg,
      },
    },
  }
}
