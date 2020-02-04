import { getTexts } from '../Core/theme/typography'

export const getToasts = theme => {
  const { colors, fontWeights, radii, space } = theme
  return {
    default: {
      'padding-left': space.sm,
      'padding-right': space.sm
    },
    top: {
      'padding-top': space.lg
    },
    bottom: {
      'padding-bottom': space.lg
    },
    growls: {
      default: {
        ...getTexts(theme).body3,
        'background-color': theme.colors.light[700],
        'border-color': colors.nude[200],
        'border-width': '1px',
        'border-style': 'solid',
        'border-radius': radii.md
      },
      title: {
        ...getTexts(theme).body2,
        'font-weight': fontWeights.bold
      }
    }
  }
}
