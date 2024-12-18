import {
  CSSScalar,
  defaultTheme,
  rpxTransformers,
  ITheme as StyledComponentDefaultTheme,
  DefaultTheme as XStyledDefaultTheme,
} from '@xstyled/styled-components'

import { mergeDeepRight } from '../../utils/mergeDeepRight'

import { darkTheme } from './dark'
import { colors, ThemeColors } from './colors'
import { fontFaces, ThemeFontFaces } from './fonts'
import {
  fontWeights,
  getFonts,
  getFontSizes,
  getLetterSpacings,
  getLineHeights,
  getTextFontColors,
  getTexts,
  getTextsFontFamily,
  getTextsFontWeights,
  getTextsTextTransform,
  ThemeFonts,
  ThemeFontSizes,
  ThemeFontWeights,
  ThemeLetterSpacings,
  ThemeLineHeights,
  ThemeTexts,
  ThemeTextsFontFamily,
  ThemeTextsFontWeights,
  ThemeTextsTextTransform,
} from './typography'
import { ThemeTimingFunction, ThemeTransitions, timingFunction, transitions } from './transitions'
import { getUnderline, ThemeUnderline } from './underline'
import { getRadii, ThemeRadii } from './radii'
import { borderWidths, ThemeBorderWidths } from './borders'
import { screens, ThemeScreens } from './screens'
import { shadows, ThemeShadows } from './shadows'
import { getSpace, ThemeSpace } from './space'
import { getSelection, ThemeSelection } from './selection'
import { getFocus, ThemeFocus } from './focus'

const DEFAULT_FONT_FAMILY = 'work-sans'
const DEFAULT_FONT_SIZE = 16
const DEFAULT_LETTER_SPACING = '-0.019rem'
const DEFAULT_LINE_HEIGHT = 1.15
const FONTS_URL = 'https://cdn.welcome-ui.com/fonts'
const HEADING_FONT_FAMILY = 'welcome-font'
const ICON_FONT_FAMILY = 'welcome-icon-font'

type OverrideKeys =
  | 'colors'
  | 'radii'
  | 'borderWidths'
  | 'fontSizes'
  | 'lineHeights'
  | 'fontWeights'
  | 'letterSpacings'
  | 'fonts'
  | 'sizes'
  | 'screens'
  | 'space'
  | 'shadows'
  | 'texts'

type XStyledTheme = Omit<XStyledDefaultTheme, OverrideKeys>
type StyledComponentsTheme = Omit<StyledComponentDefaultTheme, OverrideKeys>

export interface ThemeValues extends XStyledTheme, StyledComponentsTheme {
  borderWidths: ThemeBorderWidths
  colors: ThemeColors
  defaultLetterSpacing: string
  defaultLineHeight: number
  focus: ThemeFocus
  fontFaces: ThemeFontFaces
  fontSizes: ThemeFontSizes
  fontWeights: ThemeFontWeights
  fonts: ThemeFonts
  fontsUrl: ThemeFontsUrl
  inset: ThemeSpace
  letterSpacings: ThemeLetterSpacings
  lineHeights: ThemeLineHeights
  radii: ThemeRadii
  screens: ThemeScreens
  selection: ThemeSelection
  shadows: ThemeShadows
  space: ThemeSpace
  texts: ThemeTexts
  textsFontFamily: ThemeTextsFontFamily
  textsFontWeights: ThemeTextsFontWeights
  textsTextTransform: ThemeTextsTextTransform
  timingFunction: ThemeTimingFunction
  toEm: (int: number) => string
  toPx: (int: number) => string
  toRem: (int: number) => string
  transformers: {
    border: (value: CSSScalar) => CSSScalar
    px: (value: CSSScalar) => CSSScalar
  }
  transitions: ThemeTransitions
  underline: ThemeUnderline
}

export type ThemeFontsUrl =
  | 'https://cdn.welcome-ui.com/fonts'
  | 'https://cdn.welcometothejungle.com/fonts'
  | string

export type Options = {
  [param: string]: unknown
  defaultFontFamily?: string
  defaultFontSize?: number
  defaultLetterSpacing?: string
  defaultLineHeight?: number
  fontsUrl?: ThemeFontsUrl
  headingFontFamily?: string
  iconFontFamily?: string
}

export const createTheme = (options: Options = {}): ThemeValues => {
  const {
    defaultFontFamily = DEFAULT_FONT_FAMILY,
    defaultFontSize = DEFAULT_FONT_SIZE,
    defaultLetterSpacing = DEFAULT_LETTER_SPACING,
    defaultLineHeight = DEFAULT_LINE_HEIGHT,
    fontsUrl = FONTS_URL,
    headingFontFamily = HEADING_FONT_FAMILY,
    iconFontFamily = ICON_FONT_FAMILY,
    ...rest
  } = options

  let theme = {} as ThemeValues

  theme.transformers = { ...rpxTransformers }

  theme.toEm = px => `${px / defaultFontSize}em`
  theme.toRem = px => `${px / defaultFontSize}rem`
  theme.toPx = rem => `${rem * defaultFontSize}px`

  theme.colors = colors

  // fonts
  theme.fontsUrl = fontsUrl
  theme.fontFaces = fontFaces(theme)
  theme.fontSizes = getFontSizes('rem', theme)
  theme.defaultLineHeight = defaultLineHeight as number
  theme.defaultLetterSpacing = defaultLetterSpacing as string
  theme.lineHeights = getLineHeights(theme)
  theme.fontWeights = fontWeights
  theme.letterSpacings = getLetterSpacings(theme)
  theme.fonts = getFonts(defaultFontFamily, headingFontFamily, iconFontFamily)
  theme.borderWidths = borderWidths

  theme.screens = screens

  theme.space = getSpace(theme)

  theme.inset = theme.space

  theme.radii = getRadii(theme)

  theme.transitions = transitions
  theme.timingFunction = timingFunction

  theme.shadows = shadows

  theme = mergeDeepRight(theme, rest) as ThemeValues

  // These attributes depend on colors and fontSizes and must come last
  theme.selection = getSelection(theme)
  theme.underline = getUnderline(theme)
  theme.focus = getFocus(theme)
  theme.textsFontWeights = getTextsFontWeights(theme)
  theme.textsFontFamily = getTextsFontFamily(theme)
  theme.textsFontColors = getTextFontColors(theme)
  theme.textsTextTransform = getTextsTextTransform()
  theme.texts = getTexts(theme)

  // components

  // fields

  // states
  theme.states = defaultTheme.states

  theme = mergeDeepRight(theme, rest) as ThemeValues

  return theme
}

export { darkTheme }
