export const getFontSizes = (unit, theme) => {
  const { toEm, toRem } = theme
  const convert = unit === 'em' ? toEm : toRem
  return {
    h0: convert(65),
    h1: convert(45),
    h2: convert(36),
    h3: convert(26),
    h4: convert(20),
    h5: convert(16),
    h6: convert(14),
    body1: convert(18),
    body2: convert(16),
    body3: convert(14),
    body4: convert(12),
    button: convert(12),
    subtitle1: convert(13),
    subtitle2: convert(11),
    meta1: convert(14),
    meta2: convert(12)
  }
}

export const getLineHeights = theme => {
  const { toRem } = theme

  const defaultLineHeight = toRem(21)

  return {
    html: defaultLineHeight,
    h0: toRem(78),
    h1: toRem(54),
    h2: toRem(43),
    h3: toRem(31),
    h4: toRem(24),
    h5: toRem(21),
    h6: toRem(19),
    body1: toRem(23),
    body2: defaultLineHeight,
    body3: toRem(18),
    body4: toRem(15),
    subtitle1: 'auto',
    subtitle2: 'auto',
    meta1: toRem(18),
    meta2: toRem(16)
  }
}

export const getLetterSpacings = theme => {
  const { toRem } = theme

  const defaultSpacing = toRem(-0.3)

  return {
    sm: '0.5px',
    md: '1px',
    lg: '2px',
    html: defaultSpacing,
    h0: toRem(-1.7),
    h1: toRem(-1.2),
    h2: toRem(-1),
    h3: toRem(-0.9),
    h4: toRem(-0.6),
    h5: toRem(-0.5),
    h6: toRem(-0.4),
    body1: defaultSpacing,
    body2: defaultSpacing,
    body3: defaultSpacing,
    body4: toRem(-0.2),
    subtitle1: defaultSpacing,
    subtitle2: toRem(-0.2),
    meta1: defaultSpacing,
    meta2: toRem(-0.2)
  }
}

export const getTextsFontWeights = theme => {
  const { fontWeights } = theme

  return {
    h0: fontWeights.bold,
    h1: fontWeights.bold,
    h2: fontWeights.bold,
    h3: fontWeights.bold,
    h4: fontWeights.bold,
    h5: fontWeights.bold,
    h6: fontWeights.bold,
    body1: fontWeights.regular,
    body2: fontWeights.regular,
    body3: fontWeights.regular,
    body4: fontWeights.regular,
    button: fontWeights.bold,
    subtitle1: fontWeights.bold,
    subtitle2: fontWeights.medium,
    meta1: fontWeights.regular,
    meta2: fontWeights.regular
  }
}

export const getTextsFontFamily = theme => {
  const { fonts } = theme

  return {
    h0: fonts.headings,
    h1: fonts.headings,
    h2: fonts.headings,
    h3: fonts.headings,
    h4: fonts.headings,
    h5: fonts.headings,
    h6: fonts.headings,
    subtitle1: fonts.headings,
    subtitle2: fonts.headings
  }
}

export const getTextsTextTransform = () => {
  return {
    h0: 'uppercase'
  }
}

export const getTexts = theme => {
  const {
    fontSizes,
    letterSpacings,
    lineHeights,
    textsFontFamily,
    textsFontWeights,
    textsTextTransform
  } = theme

  return Object.keys(fontSizes).reduce((acc, key) => {
    return {
      ...acc,
      [key]: {
        fontFamily: textsFontFamily[key] || undefined,
        fontWeight: textsFontWeights[key],
        fontSize: fontSizes[key],
        lineHeight: lineHeights[key] || lineHeights.body1,
        textTransform: textsTextTransform[key] || undefined,
        letterSpacing: letterSpacings[key] || undefined
      }
    }
  }, {})
}
