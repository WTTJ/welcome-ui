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
  transformers: {
    px: (value: CSSScalar) => CSSScalar
    border: (value: CSSScalar) => CSSScalar
  }
  toEm: (int: number) => string
  toRem: (int?: number) => string
  toPx: (int?: number) => string
  colors: ThemeColors
  underline: ThemeUnderline
  borderWidths: ThemeBorderWidths
  fontFaces: ThemeFontFaces
  fontsUrl: ThemeFontsUrl
  fontSizes: ThemeFontSizes
  defaultLineHeight: number
  defaultLetterSpacing: string
  lineHeights: ThemeLineHeights
  fontWeights: ThemeFontWeights
  letterSpacings: ThemeLetterSpacings
  fonts: ThemeFonts
  screens: ThemeScreens
  space: ThemeSpace
  inset: ThemeSpace
  icons: ThemeIcons
  radii: ThemeRadii
  transitions: ThemeTransitions
  timingFunction: ThemeTimingFunction
  shadows: ThemeShadows
  selection: ThemeSelection
  focus: ThemeFocus
  defaultCards: ThemeDefaultCards
  textsFontWeights: ThemeTextsFontWeights
  textsFontFamily: ThemeTextsFontFamily
  textsTextTransform: ThemeTextsTextTransform
  alerts: ThemeAlerts
  avatars: ThemeAvatars
  buttons: ThemeButtons
  breadcrumbs: ThemeBreadcrumbs
  toasts: ThemeToasts
  paginations: ThemePaginations
  tabs: ThemeTabs
  tags: ThemeTags
  texts: ThemeTexts
  tooltips: CSSObject
  links: ThemeLinks
  dropdownMenu: ThemeDropdownMenu
  tables: ThemeTables
  cards: ThemeCards
  modals: ThemeModals
  drawers: ThemeDrawers
  loaders: ThemeLoaders
  accordions: ThemeAccordions
  swipers: ThemeSwipers
  labels: ThemeLabels
  popovers: ThemePopovers
  sizes: ThemeSizes
  // fields
  defaultFields: ThemeDefaultFields
  hints: ThemeHints
  checkboxes: ThemeCheckboxes
  toggles: ThemeToggles
  dateTimePickerCommon: ThemeDateTimePickerCommon
  textareas: ThemeTextareas
  filedrops: ThemeFiledrops
  radios: ThemeRadios
  radioTabs: ThemeRadioTabs
}
