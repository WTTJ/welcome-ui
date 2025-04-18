import type {
  CSSScalar,
  ITheme as StyledComponentDefaultTheme,
  DefaultTheme as XStyledDefaultTheme,
} from '@xstyled/styled-components'
import { defaultTheme, rpxTransformers } from '@xstyled/styled-components'
import merge from 'ramda/src/mergeDeepRight'

import type { ThemeAccordions } from '../components/Accordion/theme'
import { getAccordions } from '../components/Accordion/theme'
import type { ThemeAlerts } from '../components/Alert/theme'
import { getAlerts } from '../components/Alert/theme'
import type { ThemeAvatars } from '../components/Avatar/theme'
import { getAvatars } from '../components/Avatar/theme'
import type { ThemeBadges } from '../components/Badge/theme'
import { getBadges } from '../components/Badge/theme'
import type { ThemeBreadcrumbs } from '../components/Breadcrumb/theme'
import { getBreadcrumbs } from '../components/Breadcrumb/theme'
import type { ThemeButtons } from '../components/Button/theme'
import { getButtons } from '../components/Button/theme'
import type { ThemeCards } from '../components/Card/theme'
import { getCards } from '../components/Card/theme'
import type { ThemeCheckboxes } from '../components/Checkbox/theme'
import { getCheckboxes } from '../components/Checkbox/theme'
import type { ThemeDateTimePickerCommon } from '../components/DateTimePickerCommon/theme'
import { getDateTimePickerCommon } from '../components/DateTimePickerCommon/theme'
import type { ThemeDrawers } from '../components/Drawer/theme'
import { getDrawers } from '../components/Drawer/theme'
import type { ThemeDropdownMenu } from '../components/DropdownMenu/theme'
import { getDropdownMenu } from '../components/DropdownMenu/theme'
import type { ThemeFileDrops } from '../components/FileDrop/theme'
import { getFileDrops } from '../components/FileDrop/theme'
import type { ThemeHints } from '../components/Hint/theme'
import { getHints } from '../components/Hint/theme'
import type { ThemeIcons } from '../components/Icon/theme'
import { getIcons } from '../components/Icon/theme'
import type { ThemeLabels } from '../components/Label/theme'
import { getLabels } from '../components/Label/theme'
import type { ThemeLinks } from '../components/Link/theme'
import { getLinks } from '../components/Link/theme'
import type { ThemeLoaders } from '../components/Loader/theme'
import { getLoaders } from '../components/Loader/theme'
import type { ThemeModals } from '../components/Modal/theme'
import { getModals } from '../components/Modal/theme'
import type { ThemePagination } from '../components/Pagination/theme'
import { getPagination } from '../components/Pagination/theme'
import type { ThemePopovers } from '../components/Popover/theme'
import { getPopovers } from '../components/Popover/theme'
import type { ThemeRadios } from '../components/Radio/theme'
import { getRadios } from '../components/Radio/theme'
import type { ThemeRadioTabs } from '../components/RadioTab/theme'
import { getRadioTabs } from '../components/RadioTab/theme'
import type { ThemeSliders } from '../components/Slider/theme'
import { getSliders } from '../components/Slider/theme'
import type { ThemeSwipers } from '../components/Swiper/theme'
import { getSwipers } from '../components/Swiper/theme'
import type { ThemeTables } from '../components/Table/theme'
import { getTables } from '../components/Table/theme'
import type { ThemeTabs } from '../components/Tabs/theme'
import { getTabs } from '../components/Tabs/theme'
import type { ThemeTags } from '../components/Tag/theme'
import { getTags } from '../components/Tag/theme'
import type { ThemeTextareas } from '../components/Textarea/theme'
import { getTextareas } from '../components/Textarea/theme'
import type { ThemeToasts } from '../components/Toast/theme'
import { getToasts } from '../components/Toast/theme'
import type { ThemeToggles } from '../components/Toggle/theme'
import { getToggles } from '../components/Toggle/theme'
import type { ThemeTooltips } from '../components/Tooltip/theme'
import { getTooltips } from '../components/Tooltip/theme'
import type { ThemeVariantIcon } from '../components/VariantIcon/theme'
import { getVariantIcon } from '../components/VariantIcon/theme'

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

export interface ThemeValues extends Omit<XStyledTheme, 'transitions'>, StyledComponentsTheme {
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
