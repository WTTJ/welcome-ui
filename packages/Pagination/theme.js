export const getPaginations = ({ colors, fontSizes, fontWeights, toRem }) => ({
  default: {
    color: colors.nude[600],
    'font-weight': fontWeights.bold,
    'border-color': 'transparent',
    'border-width': '1px',
    'border-style': 'solid',
    width: toRem(30),
    height: toRem(30),
    '&:hover, &:focus': {
      color: colors.nude[800],
      'border-color': colors.nude[400]
    }
  },
  active: {
    color: colors.light[100],
    'background-color': colors.primary[500],
    'border-color': colors.primary[500],
    '&:hover, &:focus': {
      color: colors.light[100],
      'border-color': colors.primary[500]
    }
  },
  number: {
    'font-size': fontSizes.body3
  },
  dots: {
    color: colors.nude[600],
    'font-size': fontSizes.body3,
    '&:hover, &:focus': {
      border: 'none'
    }
  },
  arrow: {
    'background-color': colors.light[200],
    'border-color': colors.nude[200]
  }
})
