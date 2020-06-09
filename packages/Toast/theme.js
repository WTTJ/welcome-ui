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
      error: {
        'background-color': colors.danger[100],
        'border-color': colors.danger[500]
      },
      warning: {
        'background-color': colors.warning[100],
        'border-color': colors.warning[500]
      },
      info: {
        'background-color': colors.info[100],
        'border-color': colors.info[500]
      },
      success: {
        'background-color': colors.success[100],
        'border-color': colors.success[500]
      },
      title: {
        ...getTexts(theme).h5,
        'font-weight': fontWeights.bold
      }
    }
  }
}
