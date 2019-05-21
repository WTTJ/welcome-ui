export const getFields = (theme, toRem) => {
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
    hint: {
      'font-size': theme.fontSize.body3,
      'font-weight': theme.fontWeight.regular
    },
    checkboxes: {
      default: {
        width: toRem(15, theme.defaultFontSize),
        height: toRem(15, theme.defaultFontSize)
      },
      checked: {
        'background-color': theme.colors.primary[500],
        'border-color': theme.colors.primary[500]
      }
    },
    filedrop: {
      ...defaults,
      height: toRem(300, theme.defaultFontSize)
    },
    radiotabs: {
      default: {
        ...defaults
      },
      checked: {
        color: 'transparent',
        'background-color': theme.colors.light[200],
        'border-color': theme.colors.primary[500],
        '-webkit-text-stroke-color': theme.colors.dark[200],
        '-webkit-text-fill-color': theme.colors.dark[200],
        '&:hover': {
          'box-shadow': 'none'
        }
      },
      hover: {
        'background-color': theme.colors.light[200],
        'box-shadow': theme.boxShadow.sm
      }
    },
    textarea: {
      'min-height': '8rem'
    },
    toggles: {
      default: {
        width: toRem(22, theme.defaultFontSize),
        'background-color': theme.colors.nude[200],
        '&::after': {
          ...defaults,
          'background-color': theme.colors.light[200],
          'border-color': theme.colors.nude[400]
        }
      },
      checked: {
        'background-color': theme.colors.primary[500],
        '&::after': {
          'border-color': theme.colors.primary[500]
        }
      },
      disabled: {
        'background-color': theme.colors.light[700],
        '&::after': {
          'border-color': theme.colors.nude[200]
        }
      }
    }
  }
}
