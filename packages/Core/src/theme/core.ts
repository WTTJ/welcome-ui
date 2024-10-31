import merge from 'ramda/src/mergeDeepRight'
import { defaultTheme, rpxTransformers } from '@xstyled/styled-components'

import { WuiTheme } from './types'
import { colors } from './colors'
import { fontFaces } from './fonts'
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
import { timingFunction, transitions } from './transitions'
import { getUnderline } from './underline'
import { getDefaultFields } from './defaultFields'
import { getDefaultCards } from './defaultCards'
import { getRadii } from './radii'
import { borderWidths } from './borders'
import { screens } from './screens'
import { shadows } from './shadows'
import { getSpace } from './space'
import { getSelection } from './selection'
import { getFocus } from './focus'
import { getButtons } from './buttons'
import { getTags } from './tags'
import { getTooltips } from './tooltips'
import { getCheckboxes } from './checkboxes'
import { getModals } from './modals'
import { getSliders } from './sliders'
import { getToggles } from './toggles'
import { getHints } from './hints'
import { getAccordions } from './accordions'
import { getIcons } from './icons'
import { getLinks } from './links'
import { getTables } from './tables'
import { getTextareas } from './textareas'
import { getFiledrops } from './filedrops'
import { getRadios } from './radios'
import { getRadioTabs } from './radiosTabs'
import { getDateTimePickerCommon } from './dateTimePickerCommon'
import { getPopovers } from './popovers'
import { getLabels } from './labels'
import { getSwipers } from './swipers'
import { getLoaders } from './loaders'
import { getDrawers } from './drawers'
import { getCards } from './cards'
import { getDropdownMenu } from './dropdownMenu'
import { getAlerts } from './alerts'
import { getAvatars } from './avatars'
import { getBreadcrumbs } from './breadcrumbs'
import { getToasts } from './toasts'
import { getPaginations } from './paginations'
import { getTabs } from './tabs'
import { getBadges } from './badges'

const DEFAULT_FONT_FAMILY = 'work-sans'
const DEFAULT_FONT_SIZE = 16
const DEFAULT_LETTER_SPACING = '-0.019rem'
const DEFAULT_LINE_HEIGHT = 1.15
const FONTS_URL = 'https://cdn.welcome-ui.com/fonts'
const HEADING_FONT_FAMILY = 'welcome-font'
const ICON_FONT_FAMILY = 'welcome-icon-font'

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

export const createTheme = (options: Options = {}): WuiTheme => {
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

  let theme = {} as WuiTheme

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

  theme.icons = getIcons(theme)

  theme.radii = getRadii(theme)

  theme.transitions = transitions
  theme.timingFunction = timingFunction

  theme.shadows = shadows

  theme = merge(theme, rest) as WuiTheme

  // These attributes depend on colors and fontSizes and must come last
  theme.selection = getSelection(theme)
  theme.underline = getUnderline(theme)
  theme.focus = getFocus(theme)
  theme.defaultCards = getDefaultCards(theme)
  theme.textsFontWeights = getTextsFontWeights(theme)
  theme.textsFontFamily = getTextsFontFamily(theme)
  theme.textsFontColors = getTextFontColors(theme)
  theme.textsTextTransform = getTextsTextTransform()
  theme.texts = getTexts(theme)
  theme.alerts = getAlerts(theme)
  theme.avatars = getAvatars(theme)
  theme.badges = getBadges(theme)
  theme.buttons = getButtons(theme)
  theme.breadcrumbs = getBreadcrumbs(theme)
  theme.toasts = getToasts(theme)
  theme.paginations = getPaginations(theme)
  theme.tabs = getTabs(theme)
  theme.tags = getTags(theme)
  theme.tooltips = getTooltips(theme)
  theme.links = getLinks(theme)
  theme.dropdownMenu = getDropdownMenu(theme)
  theme.tables = getTables(theme)
  theme.cards = getCards(theme)
  theme.modals = getModals(theme)
  theme.drawers = getDrawers(theme)
  theme.loaders = getLoaders(theme)
  theme.accordions = getAccordions(theme)
  theme.swipers = getSwipers(theme)
  theme.labels = getLabels(theme)
  theme.popovers = getPopovers(theme)
  // fields
  theme.defaultFields = getDefaultFields(theme)
  theme.hints = getHints(theme)
  theme.checkboxes = getCheckboxes(theme)
  theme.toggles = getToggles(theme)
  theme.dateTimePickerCommon = getDateTimePickerCommon(theme)
  theme.textareas = getTextareas(theme)
  theme.filedrops = getFiledrops(theme)
  theme.radios = getRadios(theme)
  theme.radioTabs = getRadioTabs(theme)
  theme.sliders = getSliders(theme)

  // states
  theme.states = defaultTheme.states

  theme = merge(theme, rest) as WuiTheme

  return theme
}

export { ThemeSecondaryColors } from './colors'
