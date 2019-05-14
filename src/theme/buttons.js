import { colors } from './colors'
import { radii } from './radii'

const defaults = {
  color: colors.light.light,
  background: colors.primary.default,
  'border-color': colors.primary.default,
  'border-radius': radii.sm
}

export const buttons = {
  primary: defaults,
  secondary: {
    ...defaults,
    color: colors.primary.dark,
    background: colors.light.light,
    'border-color': colors.light.dark
  },
  tertiary: {
    ...defaults,
    color: colors.light.light,
    background: colors.dark.light,
    'border-color': colors.dark.light
  },
  disabled: {
    ...defaults,
    color: colors.dark.dark,
    background: colors.light.dark,
    'border-color': colors.light.dark
  },
  'primary-warning': {
    ...defaults,
    color: colors.light.light,
    background: colors.warning.default,
    'border-color': colors.warning.default
  },
  'secondary-warning': {
    ...defaults,
    color: colors.warning.default,
    background: colors.light.light,
    'border-color': colors.warning.default
  },
  'primary-danger': {
    ...defaults,
    color: colors.light.light,
    background: colors.danger.default,
    'border-color': colors.danger.default
  },
  'secondary-danger': {
    ...defaults,
    color: colors.danger.default,
    background: colors.light.light,
    'border-color': colors.danger.default
  }
}
