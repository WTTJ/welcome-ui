import {
  CSSObject,
  CSSScalar,
  ITheme as StyledComponentDefaultTheme,
  DefaultTheme as XStyledDefaultTheme,
} from '@xstyled/styled-components'

import { ThemeAccordions } from './accordions'
import { ThemeAlerts } from './alerts'
import { ThemeAvatars } from './avatars'
import { ThemeBorderWidths } from './borders'
import { ThemeBreadcrumbs } from './breadcrumbs'
import { ThemeButtons } from './buttons'
import { ThemeCards } from './cards'
import { ThemeCheckboxes } from './checkboxes'
import { ThemeColors } from './colors'
import { ThemeDateTimePickerCommon } from './dateTimePickerCommon'
import { ThemeDefaultCards } from './defaultCards'
import { ThemeDefaultFields } from './defaultFields'
import { ThemeDrawers } from './drawers'
import { ThemeDropdownMenu } from './dropdownMenu'
import { ThemeFiledrops } from './filedrops'
import { ThemeFocus } from './focus'
import { ThemeFontFaces } from './fonts'
import { ThemeHints } from './hints'
import { ThemeIcons } from './icons'
import { ThemeLabels } from './labels'
import { ThemeLinks } from './links'
import { ThemeLoaders } from './loaders'
import { ThemeModals } from './modals'
import { ThemePaginations } from './paginations'
import { ThemePopovers } from './popovers'
import { ThemeRadii } from './radii'
import { ThemeRadios } from './radios'
import { ThemeRadioTabs } from './radiosTabs'
import { ThemeScreens } from './screens'
import { ThemeSelection } from './selection'
import { ThemeShadows } from './shadows'
import { ThemeSpace } from './space'
import { ThemeSwipers } from './swipers'
import { ThemeTables } from './tables'
import { ThemeTabs } from './tabs'
import { ThemeTags } from './tags'
import { ThemeTextareas } from './textareas'
import { ThemeToasts } from './toasts'
import { ThemeToggles } from './toggles'
import { ThemeTimingFunction, ThemeTransitions } from './transitions'
import { ThemeSizes } from './sizes'
import {
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
import { ThemeUnderline } from './underline'
import { ThemeFontsUrl } from './core'

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

export interface WuiTheme extends XStyledTheme, StyledComponentsTheme {
  accordions: ThemeAccordions
  alerts: ThemeAlerts
  avatars: ThemeAvatars
  borderWidths: ThemeBorderWidths
  breadcrumbs: ThemeBreadcrumbs
  buttons: ThemeButtons
  cards: ThemeCards
  checkboxes: ThemeCheckboxes
  colors: ThemeColors
  dateTimePickerCommon: ThemeDateTimePickerCommon
  defaultCards: ThemeDefaultCards
  defaultFields: ThemeDefaultFields
  defaultLetterSpacing: string
  defaultLineHeight: number
  drawers: ThemeDrawers
  dropdownMenu: ThemeDropdownMenu
  filedrops: ThemeFiledrops
  focus: ThemeFocus
  fontFaces: ThemeFontFaces
  fontSizes: ThemeFontSizes
  fontWeights: ThemeFontWeights
  fonts: ThemeFonts
  fontsUrl: ThemeFontsUrl
  hints: ThemeHints
  icons: ThemeIcons
  inset: ThemeSpace
  labels: ThemeLabels
  letterSpacings: ThemeLetterSpacings
  lineHeights: ThemeLineHeights
  links: ThemeLinks
  loaders: ThemeLoaders
  modals: ThemeModals
  paginations: ThemePaginations
  popovers: ThemePopovers
  radii: ThemeRadii
  radioTabs: ThemeRadioTabs
  radios: ThemeRadios
  screens: ThemeScreens
  selection: ThemeSelection
  shadows: ThemeShadows
  sizes: ThemeSizes
  space: ThemeSpace
  swipers: ThemeSwipers
  tables: ThemeTables
  tabs: ThemeTabs
  tags: ThemeTags
  textareas: ThemeTextareas
  texts: ThemeTexts
  textsFontFamily: ThemeTextsFontFamily
  textsFontWeights: ThemeTextsFontWeights
  textsTextTransform: ThemeTextsTextTransform
  timingFunction: ThemeTimingFunction
  toEm: (int: number) => string
  toPx: (int?: number) => string
  toRem: (int?: number) => string
  toasts: ThemeToasts
  toggles: ThemeToggles
  tooltips: CSSObject
  transformers: {
    border: (value: CSSScalar) => CSSScalar
    px: (value: CSSScalar) => CSSScalar
  }
  transitions: ThemeTransitions
  underline: ThemeUnderline
}
