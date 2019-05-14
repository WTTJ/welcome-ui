import { colors } from './colors'
import { radius } from './radius'

export const getFields = theme => {
  const defaults = {
    background: colors.light.light,
    color: colors.dark.light,
    'border-color': colors.light.dark,
    'border-width': '1px',
    'border-style': 'solid',
    'border-radius': radius.sm,
    ...theme.text.input
  }

  return {
    default: defaults,
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
}
