import type { CSSObject, CSSScalar, DefaultTheme } from '@xstyled/styled-components'

import type { ThemeAccordions } from './accordions'
import type { ThemeAlerts } from './alerts'
import type { ThemeAvatars } from './avatars'
import type { ThemeBorderWidths } from './borders'
import type { ThemeBreadcrumbs } from './breadcrumbs'
import type { ThemeButtons } from './buttons'
import type { ThemeCards } from './cards'
import type { ThemeCheckboxes } from './checkboxes'
import type { ThemeColors } from './colors'
import type { ThemeDateTimePickerCommon } from './dateTimePickerCommon'
import type { ThemeDefaultCards } from './defaultCards'
import type { ThemeDefaultFields } from './defaultFields'
import type { ThemeDrawers } from './drawers'
import type { ThemeDropdownMenu } from './dropdownMenu'
import type { ThemeFiledrops } from './filedrops'
import type { ThemeFocus } from './focus'
import type { ThemeFontFaces } from './fonts'
import type { ThemeHints } from './hints'
import type { ThemeIcons } from './icons'
import type { ThemeLabels } from './labels'
import type { ThemeLinks } from './links'
import type { ThemeLoaders } from './loaders'
import type { ThemeModals } from './modals'
import type { ThemePaginations } from './paginations'
import type { ThemePopovers } from './popovers'
import type { ThemeRadii } from './radii'
import type { ThemeRadios } from './radios'
import type { ThemeRadioTabs } from './radiosTabs'
import type { ThemeScreens } from './screens'
import type { ThemeSelection } from './selection'
import type { ThemeShadows } from './shadows'
import type { ThemeSpace } from './space'
import type { ThemeSwipers } from './swipers'
import type { ThemeTables } from './tables'
import type { ThemeTabs } from './tabs'
import type { ThemeTags } from './tags'
import type { ThemeTextareas } from './textareas'
import type { ThemeToasts } from './toasts'
import type { ThemeToggles } from './toggles'
import type { ThemeTimingFunction, ThemeTransitions } from './transitions'
import type { ThemeSizes } from './sizes'
import type {
  ThemeFonts,
  ThemeFontSizes,
  ThemeFontWeights,
  ThemeLetterSpacings,
  ThemeLineHeights,
  ThemeTexts,
  ThemeTextsFontColors,
  ThemeTextsFontFamily,
  ThemeTextsFontWeights,
  ThemeTextsTextTransform,
} from './typography'
import type { ThemeUnderline } from './underline'
import type { ThemeFontsUrl } from './core'
import type { ThemeSliders } from './sliders'
import type { ThemeBadges } from './badges'

export interface WuiTheme {
  transformers: {
    px: (value: CSSScalar) => CSSScalar
    border: (value: CSSScalar) => CSSScalar
  }
  toEm: (int: number) => string
  toRem: (int?: number) => string
  toPx: (int?: number) => string
  focus: ThemeFocus

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
  defaultCards: ThemeDefaultCards
  textsFontWeights: ThemeTextsFontWeights
  textsFontFamily: ThemeTextsFontFamily
  textsTextTransform: ThemeTextsTextTransform
  textsFontColors: ThemeTextsFontColors
  sizes: ThemeSizes
  states: DefaultTheme['states']

  // components
  alerts: ThemeAlerts
  avatars: ThemeAvatars
  badges: ThemeBadges
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
  sliders: ThemeSliders

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
