import { colors } from './colors'
import { radii } from './radii'
import { typography } from './typography'

const defaults = {
  background: colors.light.light,
  color: colors.dark.light,
  'border-color': colors.light.dark,
  'border-width': '1px',
  'border-style': 'solid',
  'border-radius': radii.sm,
  ...typography.input
}

export const fields = {
  default: { ...defaults },
  disabled: {
    ...defaults,
    background: colors.light.default,
    'pointer-events': 'none'
  },
  active: {
    ...defaults,
    'border-color': colors.primary.default
  },
  focus: {
    ...defaults,
    'border-color': colors.primary.default
  }
}
