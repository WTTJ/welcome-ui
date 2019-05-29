export const getGrowls = ({ fontSizes, fontWeights, colors, radii }) => ({
  default: {
    'font-size': fontSizes.body3,
    'background-color': colors.light[200],
    'border-color': colors.nude[200],
    'border-width': '1px',
    'border-style': 'solid',
    'border-radius': radii.md
  },
  title: {
    'font-size': fontSizes.body2,
    'font-weight': fontWeights.bold
  },
  close: {
    'background-color': colors.nude[200],
    'border-radius': '50%',
    '&:hover, &:focus': {
      'background-color': colors.nude[400]
    }
  }
})
