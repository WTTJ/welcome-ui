import {
  CSSScalar,
  defaultTheme,
  rpxTransformers,
  ITheme as StyledComponentDefaultTheme,
  DefaultTheme as XStyledDefaultTheme,
} from '@xstyled/styled-components'
import merge from 'ramda/src/mergeDeepRight'

import { getAccordions, ThemeAccordions } from '../components/Accordion/theme'
import { getAlerts, ThemeAlerts } from '../components/Alert/theme'
import { getAvatars, ThemeAvatars } from '../components/Avatar/theme'
import { getBadges, ThemeBadges } from '../components/Badge/theme'
import { getBreadcrumbs, ThemeBreadcrumbs } from '../components/Breadcrumb/theme'
import { getButtons, ThemeButtons } from '../components/Button/theme'
import { getCards, ThemeCards } from '../components/Card/theme'
import {
  getDateTimePickerCommon,
  ThemeDateTimePickerCommon,
} from '../components/DateTimePickerCommon/theme'
import { getCheckboxes, ThemeCheckboxes } from '../components/Checkbox/theme'
import { getDrawers, ThemeDrawers } from '../components/Drawer/theme'
import { getDropdownMenu, ThemeDropdownMenu } from '../components/DropdownMenu/theme'
import { getFileDrops, ThemeFileDrops } from '../components/FileDrop/theme'
import { getHints, ThemeHints } from '../components/Hint/theme'
import { getLabels, ThemeLabels } from '../components/Label/theme'
import { getLinks, ThemeLinks } from '../components/Link/theme'
import { getLoaders, ThemeLoaders } from '../components/Loader/theme'
import { getIcons, ThemeIcons } from '../components/Icon/theme'
import { getModals, ThemeModals } from '../components/Modal/theme'
import { getPagination, ThemePagination } from '../components/Pagination/theme'
import { getPopovers, ThemePopovers } from '../components/Popover/theme'
import { getRadios, ThemeRadios } from '../components/Radio/theme'
import { getRadioTabs, ThemeRadioTabs } from '../components/RadioTab/theme'
import { getSliders, ThemeSliders } from '../components/Slider/theme'
import { getSwipers, ThemeSwipers } from '../components/Swiper/theme'
import { getTables, ThemeTables } from '../components/Table/theme'
import { getTabs, ThemeTabs } from '../components/Tabs/theme'
import { getTags, ThemeTags } from '../components/Tag/theme'
import { getTextareas, ThemeTextareas } from '../components/Textarea/theme'
import { getToasts, ThemeToasts } from '../components/Toast/theme'
import { getToggles, ThemeToggles } from '../components/Toggle/theme'
import { getTooltips, ThemeTooltips } from '../components/Tooltip/theme'
import { getVariantIcon, ThemeVariantIcon } from '../components/VariantIcon/theme'

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
  ThemeTextsFontColors,
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
import { getDefaultFields, ThemeDefaultFields } from './defaultFields'

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
  toEm: (int: number) => string
  toPx: (int: number) => string
  toRem: (int: number) => string
  toasts: ThemeToasts
  toggles: ThemeToggles
  tooltips: ThemeTooltips
  transformers: {
    border: (value: CSSScalar) => CSSScalar
    px: (value: CSSScalar) => CSSScalar
  }
  transitions: ThemeTransitions
  underline: ThemeUnderline
  variantIcon: ThemeVariantIcon
}

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

  theme = merge(theme, rest) as ThemeValues

  return theme
}

export { darkTheme }
