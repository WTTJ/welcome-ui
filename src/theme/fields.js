import { colors } from './colors'
import { radii } from './radii'

export const getFields = theme => {
  const defaults = {
    background: colors.light[200],
    color: colors.dark[200],
    'border-color': colors.nude[200],
    'border-width': '1px',
    'border-style': 'solid',
    'border-radius': radii.sm,
    ...theme.text.input
  }

  return {
    default: defaults,
    disabled: {
      ...defaults,
      background: colors.light[500],
      'pointer-events': 'none'
    },
    active: {
      ...defaults,
      'border-color': colors.primary[500]
    },
    focus: {
      ...defaults,
      'border-color': colors.primary[500]
    }
  }
}
