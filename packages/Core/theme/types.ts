import {
  CSSScalar,
  ITheme as StyledComponentDefaultTheme,
  DefaultTheme as XStyledDefaultTheme
} from '@xstyled/styled-components'

import { ThemeAccordions } from './accordions'
import { ThemeBorderWidths } from './borders'
import { ThemeButtons } from './buttons'
import { ThemeCheckboxes } from './checkboxes'
import { ThemeColors } from './colors'
import { ThemeDefaultCards } from './defaultCards'
import { ThemeDefaultFields } from './defaultFields'
import { ThemeFocus } from './focus'
import { ThemeFontFaces } from './fonts'
import { ThemeHints } from './hints'
import { ThemeIcons } from './icons'
import { ThemeLinks } from './links'
import { ThemeModals } from './modals'
import { ThemeRadii } from './radii'
import { ThemeScreens } from './screens'
import { ThemeSelection } from './selection'
import { ThemeShadows } from './shadows'
import { ThemeSpace } from './space'
import { ThemeTables } from './tables'
import { ThemeTags } from './tags'
import { ThemeToggles } from './toggles'
import { ThemeTooltips } from './tooltips'
import { ThemeTimingFunction, ThemeTransitions } from './transitions'
import {
  ThemeFonts,
  ThemeFontSizes,
  ThemeFontWeights,
  ThemeLetterSpacings,
  ThemeLineHeights,
  ThemeTexts,
  ThemeTextsFontFamily,
  ThemeTextsFontWeights,
  ThemeTextsTextTransform
} from './typography'
import { ThemeUnderline } from './underline'

type OverrideKeys =
  | 'colors'
  | 'radii'
  | 'borderWidths'
  | 'fontSizes'
  | 'lineHeights'
  | 'fontWeights'
  | 'letterSpacings'
  | 'fonts'
  | 'screens'
  | 'space'
  | 'shadows'
  | 'texts'

type XStyledTheme = Omit<XStyledDefaultTheme, OverrideKeys>
type StyledComponentsTheme = Omit<StyledComponentDefaultTheme, OverrideKeys>

export interface WuiTheme extends XStyledTheme, StyledComponentsTheme {
  transformers: {
    px: (value: CSSScalar) => CSSScalar
    border: (value: CSSScalar) => CSSScalar
  }
  toEm: (int: number) => string
  toRem: (int?: number) => string
  colors: ThemeColors
  radii: ThemeRadii
  underline: ThemeUnderline
  borderWidths: ThemeBorderWidths
  fontFaces: ThemeFontFaces
  fontSizes: ThemeFontSizes
  defaultLineHeight: number
  defaultLetterSpacing: string
  headingLineHeight: number
  headingLetterSpacing: string
  lineHeights: ThemeLineHeights
  fontWeights: ThemeFontWeights
  letterSpacings: ThemeLetterSpacings
  fonts: ThemeFonts
  screens: ThemeScreens
  space: ThemeSpace
  inset: ThemeSpace
  transitions: ThemeTransitions
  timingFunction: ThemeTimingFunction
  shadows: ThemeShadows
  selection: ThemeSelection
  focus: ThemeFocus
  defaultCards: ThemeDefaultCards
  textsFontWeights: ThemeTextsFontWeights
  textsFontFamily: ThemeTextsFontFamily
  textsTextTransform: ThemeTextsTextTransform
  texts: ThemeTexts
  buttons: ThemeButtons
  tags: ThemeTags
  tooltips: ThemeTooltips
  defaultFields: ThemeDefaultFields
  checkboxes: ThemeCheckboxes
  modals: ThemeModals
  toggles: ThemeToggles
  hints: ThemeHints
  accordions: ThemeAccordions
  icons: ThemeIcons
  links: ThemeLinks
  tables: ThemeTables
  // todo
  alerts: unknown
  avatars: unknown
  breadcrumbs: unknown
  toasts: unknown
  paginations: unknown
  tabs: unknown
  dropdownMenu: unknown
  cards: unknown
  drawers: unknown
  loaders: unknown
  swipers: unknown
  labels: unknown
  popovers: unknown
  dateTimePickerCommon: unknown
  textareas: unknown
  filedrops: unknown
  radios: unknown
  radioTabs: unknown
}
