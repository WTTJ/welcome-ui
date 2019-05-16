import { colors } from './colors'
import { radii } from './radii'

const defaults = {
  color: colors.light[200],
  background: colors.primary[500],
  'border-color': colors.primary[500],
  'border-radius': radii.sm
}

export const buttons = {
  primary: defaults,
  secondary: {
    ...defaults,
    color: colors.primary[700],
    background: colors.light[200],
    'border-color': colors.light[700]
  },
  tertiary: {
    ...defaults,
    color: colors.light[200],
    background: colors.dark[200],
    'border-color': colors.dark[200]
  },
  disabled: {
    ...defaults,
    color: colors.dark[700],
    background: colors.light[700],
    'border-color': colors.light[700]
  },
  'primary-warning': {
    ...defaults,
    color: colors.light[200],
    background: colors.warning[500],
    'border-color': colors.warning[500]
  },
  'secondary-warning': {
    ...defaults,
    color: colors.warning[500],
    background: colors.light[200],
    'border-color': colors.warning[500]
  },
  'primary-danger': {
    ...defaults,
    color: colors.light[200],
    background: colors.danger[500],
    'border-color': colors.danger[500]
  },
  'secondary-danger': {
    ...defaults,
    color: colors.danger[500],
    background: colors.light[200],
    'border-color': colors.danger[500]
  }
}
