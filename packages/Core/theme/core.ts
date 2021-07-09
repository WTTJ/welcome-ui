import merge from 'ramda/src/mergeDeepRight'
import { rpxTransformers } from '@xstyled/system'

// todo -> import js files crash build
// import { getToasts } from '../../Toast/theme'
// import { getLinks } from '../../Link/theme'
// import { getPaginations } from '../../Pagination/theme'
// import { getTabs } from '../../Tabs/theme'
// import { getAlerts } from '../../Alert/theme'
// import { getAvatars } from '../../Avatar/theme'
// import { getButtons } from '../../Button/theme'
// import { getBreadcrumbs } from '../../Breadcrumb/theme'
// import { getIcons } from '../../Icon/theme'
// import { getTags } from '../../Tag/theme'
// import { getTooltips } from '../../Tooltip/theme'
// import { getDropdownMenu } from '../../DropdownMenu/theme'
// import { getCards } from '../../Card/theme'
// import { getModals } from '../../Modal/theme'
// import { getDrawers } from '../../Drawer/theme'
// import { getLoaders } from '../../Loader/theme'
// import { getAccordions } from '../../Accordion/theme'
// import { getSwipers } from '../../Swiper/theme'
// import { getCheckboxes } from '../../Checkbox/theme'
// import { getTables } from '../../Table/theme'
// import { getLabels } from '../../Label/theme'
// import { getToggles } from '../../Toggle/theme'
// import { getDateTimePickerCommon } from '../../DateTimePickerCommon/theme'
// import { getTextareas } from '../../Textarea/theme'
// import { getFiledrops } from '../../FileDrop/theme'
// import { getRadios } from '../../Radio/theme'
// import { getHints } from '../../Hint/theme'
// import { getRadioTabs } from '../../RadioTab/theme'
// import { getPopovers } from '../../Popover/theme'

import { WuiTheme } from './types'
import { colors } from './colors'
import { fontFaces } from './fonts'
import {
  fontWeights,
  getFonts,
  getFontSizes,
  getLetterSpacings,
  getLineHeights,
  getTexts,
  getTextsFontFamily,
  getTextsFontWeights,
  getTextsTextTransform
} from './typography'
import { timingFunction, transitions } from './transitions'
import { getUnderline } from './underline'
import { getDefaultFields } from './defaultFields'
import { getDefaultCards } from './defaultCards'
import { radii } from './radii'
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
import { getToggles } from './toggles'
import { getHints } from './hints'

const DEFAULT_FONT_SIZE = 16
const DEFAULT_FONT_FAMILY = 'Work Sans'
const DEFAULT_LINE_HEIGHT = 1.15
const DEFAULT_LETTER_SPACING = 0
const HEADING_FONT_FAMILY = 'welcome-font'
const HEADING_LINE_HEIGHT = 1.2
const HEADING_LETTER_SPACING = 0
const ICON_FONT_FAMILY = 'welcome-icon-font'

export const createTheme = (options: Record<string, unknown> = {}): WuiTheme => {
  const {
    defaultFontFamily = DEFAULT_FONT_FAMILY,
    defaultLineHeight = DEFAULT_LINE_HEIGHT,
    defaultLetterSpacing = DEFAULT_LETTER_SPACING,
    headingFontFamily = HEADING_FONT_FAMILY,
    headingLineHeight = HEADING_LINE_HEIGHT,
    headingLetterSpacing = HEADING_LETTER_SPACING,
    iconFontFamily = ICON_FONT_FAMILY,
    ...rest
  } = options

  let theme = {} as WuiTheme

  theme.transformers = { ...rpxTransformers }

  theme.toEm = px => `${px / DEFAULT_FONT_SIZE}em`
  theme.toRem = px => `${px / DEFAULT_FONT_SIZE}rem`

  theme.colors = colors

  // fonts
  theme.fontFaces = fontFaces
  theme.fontSizes = getFontSizes('rem', theme)
  theme.defaultLineHeight = defaultLineHeight as number
  theme.defaultLetterSpacing = defaultLetterSpacing as string
  theme.headingLineHeight = headingLineHeight as number
  theme.headingLetterSpacing = headingLetterSpacing as string
  theme.lineHeights = getLineHeights(theme)
  theme.fontWeights = fontWeights
  theme.letterSpacings = getLetterSpacings(theme)
  theme.fonts = getFonts(
    defaultFontFamily as string,
    headingFontFamily as string,
    iconFontFamily as string
  )

  theme.borderWidths = borderWidths

  theme.screens = screens

  theme.space = getSpace(theme)

  theme.inset = theme.space

  // theme.icons = getIcons(theme)

  theme.radii = radii

  theme.transitions = transitions
  theme.timingFunction = timingFunction

  theme.shadows = shadows

  theme = merge(theme, rest) as WuiTheme

  // These attributes depend on colors and fontSizes and must come last
  theme.selection = getSelection(theme)
  theme.underline = getUnderline(theme)
  theme.focus = getFocus(theme.colors.primary[500])
  theme.defaultCards = getDefaultCards(theme)
  theme.textsFontWeights = getTextsFontWeights(theme)
  theme.textsFontFamily = getTextsFontFamily(theme)
  theme.textsTextTransform = getTextsTextTransform()
  // theme.alerts = getAlerts(theme)
  // theme.avatars = getAvatars(theme)
  theme.buttons = getButtons(theme)
  // theme.breadcrumbs = getBreadcrumbs(theme)
  // TODO: should be removed when all fields have been migrated to their own packageName/theme.js file
  // theme.toasts = getToasts(theme)
  // theme.paginations = getPaginations(theme)
  // theme.tabs = getTabs(theme)
  theme.tags = getTags(theme)
  theme.texts = getTexts(theme)
  theme.tooltips = getTooltips(theme)
  // theme.links = getLinks(theme)
  // theme.dropdownMenu = getDropdownMenu(theme)
  // theme.tables = getTables(theme)
  // theme.cards = getCards(theme)
  theme.modals = getModals(theme)
  // theme.drawers = getDrawers(theme)
  // theme.loaders = getLoaders(theme)
  // theme.accordions = getAccordions(theme)
  // theme.swipers = getSwipers(theme)
  // theme.labels = getLabels(theme)
  // theme.popovers = getPopovers(theme)
  // fields
  theme.defaultFields = getDefaultFields(theme)
  theme.hints = getHints(theme)
  theme.checkboxes = getCheckboxes(theme)
  theme.toggles = getToggles(theme)
  // theme.dateTimePickerCommon = getDateTimePickerCommon(theme)
  // theme.textareas = getTextareas(theme)
  // theme.filedrops = getFiledrops(theme)
  // theme.radios = getRadios(theme)
  // theme.radioTabs = getRadioTabs(theme)

  theme = merge(theme, rest) as WuiTheme

  return theme
}
