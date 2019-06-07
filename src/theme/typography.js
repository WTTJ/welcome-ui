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

export const getLineHeights = () => {
  return {
    html: '1.6em',
    h1: '1.6em',
    h2: '1.6em',
    h3: '1.6em',
    h4: '1.6em',
    body1: '1.6em',
    body2: '1.6em',
    body3: '1.6em',
    body4: '1.6em',
    button: '1.6em',
    subtitle1: '1.6em',
    subtitle2: '1.6em',
    meta1: '1.6em',
    meta2: '1.6em'
  }
}

export const getTexts = theme => {
  const { fontSizes, lineHeights } = theme
  return Object.keys(fontSizes).reduce((acc, key) => {
    return {
      ...acc,
      [key]: {
        'font-size': fontSizes[key],
        'line-height': lineHeights[key] || lineHeights.body1
      }
    }
  }, {})
}
