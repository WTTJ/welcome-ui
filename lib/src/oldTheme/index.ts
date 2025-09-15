import type {
  CSSScalar,
  ITheme as StyledComponentDefaultTheme,
  DefaultTheme as XStyledDefaultTheme,
} from '@xstyled/styled-components'
import { defaultTheme, rpxTransformers } from '@xstyled/styled-components'
import merge from 'ramda/src/mergeDeepRight'

import type { ThemeAccordions } from '../old/Accordion/theme'
import { getAccordions } from '../old/Accordion/theme'
import type { ThemeAlerts } from '../old/Alert/theme'
import { getAlerts } from '../old/Alert/theme'
import type { ThemeAvatars } from '../old/Avatar/theme'
import { getAvatars } from '../old/Avatar/theme'
import type { ThemeBadges } from '../old/Badge/theme'
import { getBadges } from '../old/Badge/theme'
import type { ThemeBreadcrumbs } from '../old/Breadcrumb/theme'
import { getBreadcrumbs } from '../old/Breadcrumb/theme'
import type { ThemeButtons } from '../old/Button/theme'
import { getButtons } from '../old/Button/theme'
import type { ThemeCards } from '../old/Card/theme'
import { getCards } from '../old/Card/theme'
import type { ThemeCheckboxes } from '../old/Checkbox/theme'
import { getCheckboxes } from '../old/Checkbox/theme'
import type { ThemeDateTimePickerCommon } from '../old/DateTimePickerCommon/theme'
import { getDateTimePickerCommon } from '../old/DateTimePickerCommon/theme'
import type { ThemeDrawers } from '../old/Drawer/theme'
import { getDrawers } from '../old/Drawer/theme'
import type { ThemeDropdownMenu } from '../old/DropdownMenu/theme'
import { getDropdownMenu } from '../old/DropdownMenu/theme'
import type { ThemeFileDrops } from '../old/FileDrop/theme'
import { getFileDrops } from '../old/FileDrop/theme'
import type { ThemeHints } from '../old/Hint/theme'
import { getHints } from '../old/Hint/theme'
import type { ThemeIcons } from '../old/Icon/theme'
import { getIcons } from '../old/Icon/theme'
import type { ThemeLabels } from '../old/Label/theme'
import { getLabels } from '../old/Label/theme'
import type { ThemeLinks } from '../old/Link/theme'
import { getLinks } from '../old/Link/theme'
import type { ThemeLoaders } from '../old/Loader/theme'
import { getLoaders } from '../old/Loader/theme'
import type { ThemeModals } from '../old/Modal/theme'
import { getModals } from '../old/Modal/theme'
import type { ThemePagination } from '../old/Pagination/theme'
import { getPagination } from '../old/Pagination/theme'
import type { ThemePopovers } from '../old/Popover/theme'
import { getPopovers } from '../old/Popover/theme'
import type { ThemeRadios } from '../old/Radio/theme'
import { getRadios } from '../old/Radio/theme'
import type { ThemeRadioTabs } from '../old/RadioTab/theme'
import { getRadioTabs } from '../old/RadioTab/theme'
import type { ThemeSliders } from '../old/Slider/theme'
import { getSliders } from '../old/Slider/theme'
import type { ThemeSwipers } from '../old/Swiper/theme'
import { getSwipers } from '../old/Swiper/theme'
import type { ThemeTables } from '../old/Table/theme'
import { getTables } from '../old/Table/theme'
import type { ThemeTabs } from '../old/Tabs/theme'
import { getTabs } from '../old/Tabs/theme'
import type { ThemeTags } from '../old/Tag/theme'
import { getTags } from '../old/Tag/theme'
import type { ThemeTextareas } from '../old/Textarea/theme'
import { getTextareas } from '../old/Textarea/theme'
import type { ThemeToasts } from '../old/Toast/theme'
import { getToasts } from '../old/Toast/theme'
import type { ThemeToggles } from '../old/Toggle/theme'
import { getToggles } from '../old/Toggle/theme'
import type { ThemeTooltips } from '../old/Tooltip/theme'
import { getTooltips } from '../old/Tooltip/theme'
import type { ThemeVariantIcon } from '../old/VariantIcon/theme'
import { getVariantIcon } from '../old/VariantIcon/theme'

import type { ThemeBorderWidths } from './borders'
import { borderWidths } from './borders'
import type { ThemeColors } from './colors'
import { colors } from './colors'
import { darkTheme } from './dark'
import type { ThemeDefaultFields } from './defaultFields'
import { getDefaultFields } from './defaultFields'
import type { ThemeFocus } from './focus'
import { getFocus } from './focus'
import type { ThemeFontFaces } from './fonts'
import { fontFaces } from './fonts'
import type { ThemeRadii } from './radii'
import { getRadii } from './radii'
import type { ThemeScreens } from './screens'
import { screens } from './screens'
import type { ThemeSelection } from './selection'
import { getSelection } from './selection'
import type { ThemeShadows } from './shadows'
import { shadows } from './shadows'
import type { ThemeSpace } from './space'
import { getSpace } from './space'
import type { ThemeTimingFunction, ThemeTransitions } from './transitions'
import { timingFunction, transitions } from './transitions'
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
} from './typography'
import type { ThemeUnderline } from './underline'
import { getUnderline } from './underline'

const DEFAULT_FONT_FAMILY = 'work-sans'
const DEFAULT_FONT_SIZE = 16
const DEFAULT_LETTER_SPACING = '-0.019rem'
const DEFAULT_LINE_HEIGHT = 1.15
const FONTS_URL = 'https://cdn.welcome-ui.com/fonts'
const HEADING_FONT_FAMILY = 'welcome-font'
const ICON_FONT_FAMILY = 'welcome-icon-font'

export type ThemeColorTokens = keyof ThemeColors

export type ThemeFontsUrl =
  | 'https://cdn.welcome-ui.com/fonts'
  | 'https://cdn.welcometothejungle.com/fonts'
  | string
export type ThemeProps = {
  [param: string]: unknown
  defaultFontFamily?: string
  defaultFontSize?: number
  defaultLetterSpacing?: string
  defaultLineHeight?: number
  fontsUrl?: ThemeFontsUrl
  headingFontFamily?: string
  iconFontFamily?: string
}

export interface ThemeValues extends StyledComponentsTheme, XStyledTheme {
  accordions: ThemeAccordions
  alerts: ThemeAlerts
  avatars: ThemeAvatars
  badges: ThemeBadges
  borderWidths: ThemeBorderWidths
  breadcrumbs: ThemeBreadcrumbs
  buttons: ThemeButtons
  cards: ThemeCards
  checkboxes: ThemeCheckboxes
  colors: ThemeColors
  dateTimePickerCommon: ThemeDateTimePickerCommon
  defaultFields: ThemeDefaultFields
  defaultLetterSpacing: string
  defaultLineHeight: number
  drawers: ThemeDrawers
  dropdownMenu: ThemeDropdownMenu
  fileDrops: ThemeFileDrops
  focus: ThemeFocus
  fontFaces: ThemeFontFaces
  fonts: ThemeFonts
  fontSizes: ThemeFontSizes
  fontsUrl: ThemeFontsUrl
  fontWeights: ThemeFontWeights
  hints: ThemeHints
  icons: ThemeIcons
  inset: ThemeSpace
  labels: ThemeLabels
  letterSpacings: ThemeLetterSpacings
  lineHeights: ThemeLineHeights
  links: ThemeLinks
  loaders: ThemeLoaders
  modals: ThemeModals
  pagination: ThemePagination
  popovers: ThemePopovers
  radii: ThemeRadii
  radios: ThemeRadios
  radiosTab: ThemeRadioTabs
  screens: ThemeScreens
  selection: ThemeSelection
  shadows: ThemeShadows
  sliders: ThemeSliders
  space: ThemeSpace
  swipers: ThemeSwipers
  tables: ThemeTables
  tabs: ThemeTabs
  tags: ThemeTags
  textareas: ThemeTextareas
  texts: ThemeTexts
  textsFontColors: ThemeTextsFontColors
  textsFontFamily: ThemeTextsFontFamily
  textsFontWeights: ThemeTextsFontWeights
  textsTextTransform: ThemeTextsTextTransform
  timingFunction: ThemeTimingFunction
  toasts: ThemeToasts
  toEm: (int: number) => string
  toggles: ThemeToggles
  tooltips: ThemeTooltips
  toPx: (int: number) => string
  toRem: (int: number) => string
  transformers: {
    border: (value: CSSScalar) => CSSScalar
    px: (value: CSSScalar) => CSSScalar
  }
  transitions: ThemeTransitions
  underline: ThemeUnderline
  variantIcon: ThemeVariantIcon
}

type OverrideKeys =
  | 'borderWidths'
  | 'colors'
  | 'fonts'
  | 'fontSizes'
  | 'fontWeights'
  | 'letterSpacings'
  | 'lineHeights'
  | 'radii'
  | 'screens'
  | 'shadows'
  | 'sizes'
  | 'space'
  | 'texts'

type StyledComponentsTheme = Omit<StyledComponentDefaultTheme, OverrideKeys>

type XStyledTheme = Omit<XStyledDefaultTheme, OverrideKeys>

export const createTheme = (options: ThemeProps = {}): ThemeValues => {
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

  theme = merge(theme, rest) as ThemeValues

  // These attributes depend on colors and fontSizes and must come last
  theme.selection = getSelection(theme)
  theme.underline = getUnderline(theme)
  theme.focus = getFocus(theme)
  theme.textsFontWeights = getTextsFontWeights(theme)
  theme.textsFontFamily = getTextsFontFamily(theme)
  theme.textsFontColors = getTextFontColors(theme)
  theme.textsTextTransform = getTextsTextTransform()
  theme.texts = getTexts(theme)
  theme.defaultFields = getDefaultFields(theme)
  theme.icons = getIcons(theme)

  // components
  theme.accordions = getAccordions(theme)
  theme.alerts = getAlerts(theme)
  theme.avatars = getAvatars(theme)
  theme.badges = getBadges(theme)
  theme.breadcrumbs = getBreadcrumbs(theme)
  theme.buttons = getButtons(theme)
  theme.cards = getCards(theme)
  theme.checkboxes = getCheckboxes(theme)
  theme.dateTimePickerCommon = getDateTimePickerCommon(theme)
  theme.drawers = getDrawers(theme)
  theme.dropdownMenu = getDropdownMenu(theme)
  theme.fileDrops = getFileDrops(theme)
  theme.hints = getHints(theme)
  theme.labels = getLabels(theme)
  theme.links = getLinks(theme)
  theme.loaders = getLoaders(theme)
  theme.modals = getModals(theme)
  theme.paginations = getPagination(theme)
  theme.popovers = getPopovers(theme)
  theme.radios = getRadios(theme)
  theme.radiosTab = getRadioTabs(theme)
  theme.sliders = getSliders(theme)
  theme.swipers = getSwipers(theme)
  theme.tables = getTables(theme)
  theme.tabs = getTabs(theme)
  theme.tags = getTags(theme)
  theme.textareas = getTextareas(theme)
  theme.toasts = getToasts(theme)
  theme.toggles = getToggles(theme)
  theme.tooltips = getTooltips(theme)
  theme.variantIcon = getVariantIcon(theme)

  // states
  theme.states = defaultTheme.states
  theme.durations = defaultTheme.durations
  theme.gridTemplateColumns = defaultTheme.gridTemplateColumns
  theme.gridTemplateRows = defaultTheme.gridTemplateRows
  theme.ringWidths = defaultTheme.ringWidths
  theme.borders = defaultTheme.borders
  theme.transitionProperties = defaultTheme.transitionProperties
  theme.timingFunctions = defaultTheme.timingFunctions
  theme.animations = defaultTheme.animations
  theme.xstyled = defaultTheme.xstyled

  theme = merge(theme, rest) as ThemeValues

  return theme
}

export { darkTheme }
