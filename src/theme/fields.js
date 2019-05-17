import { colors } from './colors'
import { radii } from './radii'

export const getFields = theme => {
  const defaults = {
    color: colors.dark[200],
    'background-color': colors.light[200],
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
      'background-color': colors.light[500],
      'pointer-events': 'none'
    },
    active: {
      ...defaults,
      'border-color': colors.primary[500]
    },
    focus: {
      ...defaults,
      'border-color': colors.primary[500]
    },
    placeholder: {
      color: colors.nude[300]
    },
    radiotabs: {
      default: {
        ...defaults
      },
      checked: {
        color: 'transparent',
        'background-color': colors.light[200],
        'border-color': colors.primary[500],
        'box-shadow': 'none',
        '-webkit-text-stroke-color': colors.primary[700],
        '-webkit-text-fill-color': colors.primary[700]
      },
      hover: {
        'background-color': colors.nude[100],
        'box-shadow': theme.boxShadow.xs
      }
    }
  }
}
