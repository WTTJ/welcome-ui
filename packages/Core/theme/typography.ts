import { CSSObject } from '@xstyled/styled-components'

import { WuiTheme } from './types'

export type ThemeFontSizes = {
  h0: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  body1: string
  body2: string
  body3: string
  body4: string
  button: string
  subtitle1: string
  subtitle2: string
  meta1: string
  meta2: string
  [key: number]: string
}

export const getFontSizes = (unit: string, theme: WuiTheme): ThemeFontSizes => {
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
    meta2: convert(12),
  }
}

export type ThemeLineHeights = {
  html: number
  h0: number
  h1: number
  h2: number
  h3: number
  h4: number
  h5: number
  h6: number
  body1: number
  body2: number
  body3: number
  body4: number
  subtitle1: number
  subtitle2: number
  meta1: number
  meta2: number
}

export const getLineHeights = ({
  defaultLineHeight,
  headingLineHeight,
}: {
  defaultLineHeight: number
  headingLineHeight: number
}): ThemeLineHeights => ({
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
  meta2: defaultLineHeight,
})

export type ThemeFontWeights = {
  regular: number
  medium: number
  bold: number
}

export const fontWeights: ThemeFontWeights = {
  regular: 400,
  medium: 500,
  bold: 600,
}

export type ThemeLetterSpacings = {
  sm: string
  md: string
  lg: string
  html: string
  h0: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  body1: string
  body2: string
  body3: string
  body4: string
  subtitle1: string
  subtitle2: string
  meta1: string
  meta2: string
}

export const getLetterSpacings = ({
  defaultLetterSpacing,
  headingLetterSpacing,
}: {
  defaultLetterSpacing: string
  headingLetterSpacing: string
}): ThemeLetterSpacings => ({
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
  meta2: defaultLetterSpacing,
})

export type ThemeTextsFontWeights = {
  h0: number
  h1: number
  h2: number
  h3: number
  h4: number
  h5: number
  h6: number
  body1: number
  body2: number
  body3: number
  body4: number
  button: number
  subtitle1: number
  subtitle2: number
  meta1: number
  meta2: number
}

export const getTextsFontWeights = (theme: WuiTheme): ThemeTextsFontWeights => {
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
    meta2: fontWeights.regular,
  }
}

export type ThemeTextsFontFamily = {
  h0: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  subtitle1: string
  subtitle2: string
}

export const getTextsFontFamily = (theme: WuiTheme): ThemeTextsFontFamily => {
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
    subtitle2: fonts.headings,
  }
}

export type ThemeTextsTextTransform = {
  subtitle1: string
  subtitle2: string
}

export const getTextsTextTransform = (): ThemeTextsTextTransform => {
  return {
    subtitle1: 'uppercase',
    subtitle2: 'uppercase',
  }
}

export type ThemeTextsFontColors = {
  h0: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  [key: number]: string
}

export const getTextFontColors = (theme: WuiTheme): ThemeTextsFontColors => {
  const { colors } = theme

  return {
    h0: colors.dark[900],
    h1: colors.dark[900],
    h2: colors.dark[900],
    h3: colors.dark[900],
    h4: colors.dark[900],
    h5: colors.dark[900],
    h6: colors.dark[900],
  }
}

export type ThemeTexts = {
  [key: string]: Partial<{
    color: CSSObject['color']
    fontFamily: CSSObject['fontFamily']
    fontWeight: CSSObject['fontWeight']
    fontSize: CSSObject['fontSize']
    lineHeight: CSSObject['lineHeight']
    textTransform: CSSObject['textTransform']
    letterSpacing: CSSObject['letterSpacing']
  }>
}

export const getTexts = (theme: WuiTheme): ThemeTexts => {
  const {
    fontSizes,
    letterSpacings,
    lineHeights,
    textsFontColors,
    textsFontFamily,
    textsFontWeights,
    textsTextTransform,
  } = theme

  return Object.keys(fontSizes).reduce((acc, key) => {
    return {
      ...acc,
      [key]: {
        color: textsFontColors[key as keyof ThemeTextsFontColors],
        fontFamily: textsFontFamily[key as keyof ThemeTextsFontFamily] || undefined,
        fontWeight: textsFontWeights[key as keyof ThemeTextsFontFamily],
        fontSize: fontSizes[key as keyof ThemeFontSizes],
        lineHeight: lineHeights[key as keyof ThemeLineHeights] || lineHeights.body1,
        letterSpacing: letterSpacings[key as keyof ThemeLetterSpacings] || undefined,
        textTransform: textsTextTransform[key as keyof ThemeTextsTextTransform] || undefined,
      },
    }
  }, {})
}

export type ThemeFonts = {
  texts: string
  headings: string
  icons: string
}

export const getFonts = (
  defaultFontFamily: string,
  headingFontFamily: string,
  iconFontFamily: string
): ThemeFonts => {
  return {
    texts: [defaultFontFamily, 'sans-serif'].join(', '),
    headings: [headingFontFamily, 'sans-serif'].join(', '),
    icons: iconFontFamily,
  }
}
