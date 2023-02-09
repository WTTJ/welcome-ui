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
  lg: string
  md: string
  sm: string
  xs: string
  'subtitle-md': string
  'subtitle-sm': string
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
    lg: convert(18),
    md: convert(16),
    sm: convert(14),
    xs: convert(12),
    'subtitle-md': convert(13),
    'subtitle-sm': convert(11),
  }
}

export type ThemeLineHeights = {
  html: number | string
  h0: number | string
  h1: number | string
  h2: number | string
  h3: number | string
  h4: number | string
  h5: number | string
  h6: number | string
  lg: number | string
  md: number | string
  sm: number | string
  xs: number | string
  'subtitle-md': number | string
  'subtitle-sm': number | string
  [key: number]: number | string
}

export const getLineHeights = ({
  defaultLineHeight,
  toRem,
}: {
  defaultLineHeight: number
  toRem: (value: number) => string
}): ThemeLineHeights => {
  return {
    html: defaultLineHeight,
    h0: toRem(72),
    h1: toRem(48),
    h2: toRem(40),
    h3: toRem(32),
    h4: toRem(24),
    h5: toRem(18),
    h6: toRem(16),
    lg: toRem(24),
    md: toRem(18),
    sm: toRem(18),
    xs: toRem(14),
    'subtitle-md': defaultLineHeight,
    'subtitle-sm': defaultLineHeight,
  }
}

export type ThemeFontWeights = {
  regular: number
  medium: number
  bold: number
  [key: string]: number
}

export const fontWeights: ThemeFontWeights = {
  regular: 400,
  medium: 500,
  bold: 600,
}

export type ThemeLetterSpacings = {
  html: string
  h0: string
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
  lg: string
  md: string
  sm: string
  xs: string
  'subtitle-md': string
  'subtitle-sm': string
  [key: string]: string
}

export const getLetterSpacings = ({
  defaultLetterSpacing,
  toRem,
}: {
  defaultLetterSpacing: string
  toRem: (value: number) => string
}): ThemeLetterSpacings => {
  return {
    html: defaultLetterSpacing,
    h0: toRem(-1.7),
    h1: toRem(-1.2),
    h2: toRem(-1),
    h3: toRem(-0.9),
    h4: toRem(-0.6),
    h5: toRem(-0.5),
    h6: toRem(-0.5),
    lg: defaultLetterSpacing,
    md: defaultLetterSpacing,
    sm: defaultLetterSpacing,
    xs: toRem(-0.2),
    'subtitle-md': toRem(-0.2),
    'subtitle-sm': toRem(-0.2),
  }
}

export type ThemeTextsFontWeights = {
  h0: number
  h1: number
  h2: number
  h3: number
  h4: number
  h5: number
  h6: number
  lg: number
  md: number
  sm: number
  xs: number
  'subtitle-md': number
  'subtitle-sm': number
  [key: string]: number
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
    lg: fontWeights.regular,
    md: fontWeights.regular,
    sm: fontWeights.regular,
    xs: fontWeights.regular,
    'subtitle-md': fontWeights.bold,
    'subtitle-sm': fontWeights.medium,
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
  'subtitle-md': string
  'subtitle-sm': string
  [key: string]: string
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
    'subtitle-md': fonts.headings,
    'subtitle-sm': fonts.headings,
  }
}

export type ThemeTextsTextTransform = {
  'subtitle-md': string
  'subtitle-sm': string
  [key: string]: string
}

export const getTextsTextTransform = (): ThemeTextsTextTransform => {
  return {
    'subtitle-md': 'uppercase',
    'subtitle-sm': 'uppercase',
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
    h0: colors['dark-900'],
    h1: colors['dark-900'],
    h2: colors['dark-900'],
    h3: colors['dark-900'],
    h4: colors['dark-900'],
    h5: colors['dark-900'],
    h6: colors['dark-900'],
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
        lineHeight: lineHeights[key as keyof ThemeLineHeights] || lineHeights.lg,
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
