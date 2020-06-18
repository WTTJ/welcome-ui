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

export const getLineHeights = ({ defaultLineHeight, headingLineHeight }) => ({
  html: defaultLineHeight,
  h0: headingLineHeight,
  h1: headingLineHeight,
  h2: headingLineHeight,
  h3: headingLineHeight,
  h4: headingLineHeight,
  h5: headingLineHeight,
  h6: headingLineHeight,
  body1: defaultLineHeight,
  body2: defaultLineHeight,
  body3: defaultLineHeight,
  body4: defaultLineHeight,
  subtitle1: headingLineHeight,
  subtitle2: headingLineHeight,
  meta1: defaultLineHeight,
  meta2: defaultLineHeight
})

export const getLetterSpacings = ({ defaultLetterSpacing, headingLetterSpacing }) => ({
  sm: '0.5px',
  md: '1px',
  lg: '2px',
  html: defaultLetterSpacing,
  h0: headingLetterSpacing,
  h1: headingLetterSpacing,
  h2: headingLetterSpacing,
  h3: headingLetterSpacing,
  h4: headingLetterSpacing,
  h5: headingLetterSpacing,
  h6: headingLetterSpacing,
  body1: defaultLetterSpacing,
  body2: defaultLetterSpacing,
  body3: defaultLetterSpacing,
  body4: defaultLetterSpacing,
  subtitle1: headingLetterSpacing,
  subtitle2: headingLetterSpacing,
  meta1: defaultLetterSpacing,
  meta2: defaultLetterSpacing
})

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
