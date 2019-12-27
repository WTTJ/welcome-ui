import { getTexts } from '../Core/theme/typography'

export const getGrowls = theme => {
  const { colors, fontWeights, radii } = theme
  return {
    default: {
      ...getTexts(theme).body3,
      'background-color': theme.colors.light[200],
      'border-color': colors.nude[200],
      'border-width': '1px',
      'border-style': 'solid',
      'border-radius': radii.md
    },
    title: {
      ...getTexts(theme).body2,
      'font-weight': fontWeights.bold
    },
    close: {
      'background-color': colors.nude[200],
      'border-radius': '50%',
      '&:hover, &:focus': {
        'background-color': colors.nude[400]
      }
    }
  }
}
