export const getFields = theme => {
  const defaults = {
    color: theme.colors.nude[800],
    'background-color': theme.colors.light[200],
    'border-color': theme.colors.nude[200],
    'border-width': '1px',
    'border-style': 'solid',
    'border-radius': theme.radii.sm,
    ...theme.text.input
  }

  return {
    default: defaults,
    disabled: {
      ...defaults,
      'background-color': theme.colors.light[500],
      'pointer-events': 'none'
    },
    focus: {
      ...defaults,
      'background-color': theme.colors.light[100],
      'border-color': theme.colors.primary[500]
    },
    placeholder: {
      color: theme.colors.nude[600]
    },
    checkbox: {
      checked: {
        'background-color': theme.colors.primary[500],
        'border-color': theme.colors.primary[500]
      }
    },
    radiotabs: {
      default: {
        ...defaults
      },
      checked: {
        color: 'transparent',
        'background-color': theme.colors.light[200],
        'border-color': theme.colors.primary[500],
        'box-shadow': 'none',
        '-webkit-text-stroke-color': theme.colors.dark[200],
        '-webkit-text-fill-color': theme.colors.dark[200]
      },
      hover: {
        'background-color': theme.colors.light[200],
        'box-shadow': theme.boxShadow.xs
      }
    }
  }
}
