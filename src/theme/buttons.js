export const getButtons = theme => {
  const { colors, fontSizes, fontWeights, letterSpacings, radii } = theme
  const defaults = {
    color: colors.light[200],
    'font-size': fontSizes.button,
    'font-weight': fontWeights.bold,
    'text-transform': 'uppercase',
    'letter-spacing': letterSpacings.md,
    'background-color': colors.primary[500],
    'border-color': colors.primary[500],
    'border-radius': radii.sm
  }

  return {
    primary: defaults,
    secondary: {
      ...defaults,
      color: colors.secondary[500],
      'background-color': colors.light[200],
      'border-color': colors.light[700]
    },
    tertiary: {
      ...defaults,
      color: colors.light[200],
      'background-color': colors.dark[200],
      'border-color': colors.dark[200]
    },
    disabled: {
      ...defaults,
      color: colors.nude[700],
      'background-color': colors.light[700],
      'border-color': colors.light[700]
    },
    'primary-warning': {
      ...defaults,
      color: colors.light[200],
      'background-color': colors.warning[500],
      'border-color': colors.warning[500]
    },
    'secondary-warning': {
      ...defaults,
      color: colors.warning[500],
      'background-color': colors.light[200],
      'border-color': colors.warning[500]
    },
    'primary-danger': {
      ...defaults,
      color: colors.light[200],
      'background-color': colors.danger[500],
      'border-color': colors.danger[500]
    },
    'secondary-danger': {
      ...defaults,
      color: colors.danger[500],
      'background-color': colors.light[200],
      'border-color': colors.danger[500]
    }
  }
}
