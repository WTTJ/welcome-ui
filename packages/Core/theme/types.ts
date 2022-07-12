import { CSSObject } from 'styled-components'

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
import { ThemeBreakpoints } from './breakpoints'
import { ThemeSelection } from './selection'
import { ThemeShadows } from './shadows'
import { ThemeSpaces } from './spaces'
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
  ThemeTextsFontColors,
  ThemeTextsFontFamily,
  ThemeTextsFontWeights,
  ThemeTextsTextTransform,
} from './typography'
import { ThemeUnderline } from './underline'
import { ThemeStates } from './states'
import { ThemeCloseButton } from './closeButton'

export interface WuiTheme {
  toEm: (int: number) => string
  toRem: (int?: number) => string
  colors: ThemeColors
  underline: ThemeUnderline
  borderWidths: ThemeBorderWidths
  fontFaces: ThemeFontFaces
  fontSizes: ThemeFontSizes
  defaultLineHeight: number
  defaultLetterSpacing: string
  lineHeights: ThemeLineHeights
  fontWeights: ThemeFontWeights
  letterSpacings: ThemeLetterSpacings
  fonts: ThemeFonts
  breakpoints: ThemeBreakpoints
  spaces: ThemeSpaces
  inset: ThemeSpaces
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
  textsFontColors: ThemeTextsFontColors
  textsTextTransform: ThemeTextsTextTransform
  alerts: ThemeAlerts
  avatars: ThemeAvatars
  buttons: ThemeButtons
  closeButton: ThemeCloseButton
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
  states: ThemeStates
  // fields
  defaultFields: ThemeDefaultFields
  checkboxes: ThemeCheckboxes
  toggles: ThemeToggles
  dateTimePickerCommon: ThemeDateTimePickerCommon
  textareas: ThemeTextareas
  filedrops: ThemeFiledrops
  radios: ThemeRadios
  radioTabs: ThemeRadioTabs
}
