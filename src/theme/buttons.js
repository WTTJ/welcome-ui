export const getButtons = theme => {
  const defaults = {
    color: theme.colors.light[200],
    background: theme.colors.primary[500],
    'border-color': theme.colors.primary[500],
    'border-radius': theme.radii.sm
  }

  return {
    primary: defaults,
    secondary: {
      ...defaults,
      color: theme.colors.primary[500],
      background: theme.colors.light[200],
      'border-color': theme.colors.light[700]
    },
    tertiary: {
      ...defaults,
      color: theme.colors.light[200],
      background: theme.colors.dark[200],
      'border-color': theme.colors.dark[200]
    },
    disabled: {
      ...defaults,
      color: theme.colors.dark[700],
      background: theme.colors.light[700],
      'border-color': theme.colors.light[700]
    },
    'primary-warning': {
      ...defaults,
      color: theme.colors.light[200],
      background: theme.colors.warning[500],
      'border-color': theme.colors.warning[500]
    },
    'secondary-warning': {
      ...defaults,
      color: theme.colors.warning[500],
      background: theme.colors.light[200],
      'border-color': theme.colors.warning[500]
    },
    'primary-danger': {
      ...defaults,
      color: theme.colors.light[200],
      background: theme.colors.danger[500],
      'border-color': theme.colors.danger[500]
    },
    'secondary-danger': {
      ...defaults,
      color: theme.colors.danger[500],
      background: theme.colors.light[200],
      'border-color': theme.colors.danger[500]
    }
  }
}
