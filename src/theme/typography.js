export const getFontSizes = (unit, theme) => {
  const { defaultFontSize, toEm, toRem } = theme
  const convert = unit === 'em' ? toEm : toRem
  return {
    html: `${defaultFontSize}px`,
    h1: convert(36),
    h2: convert(28),
    h3: convert(22),
    h4: convert(18),
    body1: convert(17),
    body2: convert(15),
    body3: convert(13),
    body4: convert(11),
    button: convert(11),
    subtitle1: convert(13),
    subtitle2: convert(11),
    meta1: convert(13),
    meta2: convert(11)
  }
}

export const getTypography = theme => {
  const { colors, fontSizes, fontWeights, letterSpacings } = theme
  return {
    hint: {
      'font-size': fontSizes.body3,
      'font-weight': fontWeights.regular
    },
    label: {
      color: colors.nude[800],
      'font-size': fontSizes.body3,
      'font-weight': fontWeights.medium
    },
    checkablelabel: {
      default: {
        'font-weight': fontWeights.regular
      },
      checked: {
        color: colors.dark[200],
        'font-weight': fontWeights.bold
      }
    },
    input: {
      'font-size': fontSizes.body3,
      'font-weight': fontWeights.regular
    },
    badge: {
      'font-size': fontSizes.body3,
      'font-weight': fontWeights.bold
    },
    button: {
      'font-size': fontSizes.button,
      'font-weight': fontWeights.bold,
      'text-transform': 'uppercase',
      'letter-spacing': letterSpacings.md
    }
  }
}
