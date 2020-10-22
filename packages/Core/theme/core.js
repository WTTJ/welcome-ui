import merge from 'ramda/src/mergeDeepRight'
import { rpxTransformers } from '@xstyled/system'
import { hexToRGBA } from '@welcome-ui/utils'

import { getToasts } from '../../Toast/theme'
import { getLinks } from '../../Link/theme'
import { getPaginations } from '../../Pagination/theme'
import { getTabs } from '../../Tabs/theme'
import { getAlerts } from '../../Alert/theme'
import { getAvatars } from '../../Avatar/theme'
import { getButtons } from '../../Button/theme'
import { getBreadcrumbs } from '../../Breadcrumb/theme'
import { getIcons } from '../../Icon/theme'
import { getTags } from '../../Tag/theme'
import { getTooltips } from '../../Tooltip/theme'
import { getDropdownMenu } from '../../DropdownMenu/theme'
import { getCards } from '../../Card/theme'
import { getModals } from '../../Modal/theme'
import { getLoaders } from '../../Loader/theme'
import { getAccordions } from '../../Accordion/theme'
import { getSwipers } from '../../Swiper/theme'
import { getCheckboxes } from '../../Checkbox/theme'
import { getTables } from '../../Table/theme'
import { getLabels } from '../../Label/theme'
import { getToggles } from '../../Toggle/theme'
import { getDateTimePickerCommon } from '../../DateTimePickerCommon/theme'
import { getTextareas } from '../../Textarea/theme'
import { getFiledrops } from '../../FileDrop/theme'
import { getRadios } from '../../Radio/theme'
import { getHints } from '../../Hint/theme'
import { getRadioTabs } from '../../RadioTab/theme'
import { getPopovers } from '../../Popover/theme'

import { colors } from './colors'
import { fontFaces } from './fonts'
import {
  getFontSizes,
  getLetterSpacings,
  getLineHeights,
  getTexts,
  getTextsFontFamily,
  getTextsFontWeights,
  getTextsTextTransform
} from './typography'
import { transitionCurves, transitions } from './transitions'
import { getUnderline } from './underline'
import { getDefaultFields } from './defaultFields'
import { getDefaultCards } from './defaultCards'

const DEFAULT_FONT_SIZE = 16
const DEFAULT_FONT_FAMILY = 'Work Sans'
const DEFAULT_LINE_HEIGHT = 1.15
const DEFAULT_LETTER_SPACING = 0
const HEADING_FONT_FAMILY = 'welcome-font'
const HEADING_LINE_HEIGHT = 1.2
const HEADING_LETTER_SPACING = 0
const ICON_FONT_FAMILY = 'welcome-icon-font'

export const createTheme = (options = {}) => {
  let {
    defaultFontFamily = DEFAULT_FONT_FAMILY,
    defaultLineHeight = DEFAULT_LINE_HEIGHT,
    defaultLetterSpacing = DEFAULT_LETTER_SPACING,
    headingFontFamily = HEADING_FONT_FAMILY,
    headingLineHeight = HEADING_LINE_HEIGHT,
    headingLetterSpacing = HEADING_LETTER_SPACING,
    iconFontFamily = ICON_FONT_FAMILY,
    ...rest
  } = options

  let theme = {}

  theme.transformers = { ...rpxTransformers }

  theme.toEm = px => `${px / DEFAULT_FONT_SIZE}em`
  theme.toRem = px => `${px / DEFAULT_FONT_SIZE}rem`

  theme.colors = colors

  // fonts
  theme.fontFaces = fontFaces
  theme.fontSizes = getFontSizes('rem', theme)
  theme.defaultLineHeight = defaultLineHeight
  theme.defaultLetterSpacing = defaultLetterSpacing
  theme.headingLineHeight = headingLineHeight
  theme.headingLetterSpacing = headingLetterSpacing
  theme.lineHeights = getLineHeights(theme)
  theme.fontWeights = {
    regular: '400',
    medium: '500',
    bold: '600'
  }
  theme.letterSpacings = getLetterSpacings(theme)
  theme.fonts = {
    texts: [defaultFontFamily, 'sans-serif'].join(', '),
    headings: [headingFontFamily, 'sans-serif'].join(', '),
    icons: iconFontFamily
  }

  theme.borderWidths = {
    sm: '1px',
    md: '2px',
    lg: '3px'
  }

  theme.breakpoints = {
    xs: 0,
    sm: 480,
    md: 736,
    lg: 980,
    xl: 1280
  }

  theme.space = {
    xxs: theme.toRem(6),
    xs: theme.toRem(8),
    sm: theme.toRem(10),
    md: theme.toRem(12),
    lg: theme.toRem(15),
    xl: theme.toRem(20),
    xxl: theme.toRem(24),
    '3xl': theme.toRem(30),
    '4xl': theme.toRem(36)
  }

  theme.icons = getIcons(theme)

  theme.radii = { sm: '4px', md: '6px', lg: '10px' }

  theme.transitions = transitions
  theme.transitionCurves = transitionCurves

  theme.shadows = {
    sm: '1px 2px 4px 0 rgba(0,0,0,0.05)',
    md: '3px 4px 10px 0 rgba(0,0,0,0.07)'
  }

  theme = merge(theme, rest)

  // These attributes depend on colors and fontSizes and must come last
  theme.selection = {
    backgroundColor: theme.colors.primary[500],
    color: theme.colors.light[900]
  }
  theme.underline = getUnderline(theme)
  theme.focus = (color = theme.colors.primary[500]) => ({
    boxShadow: `0 0 0 3px ${hexToRGBA(color, 0.5)}`
  })
  theme.defaultCards = getDefaultCards(theme)
  theme.textsFontWeights = getTextsFontWeights(theme)
  theme.textsFontFamily = getTextsFontFamily(theme)
  theme.textsTextTransform = getTextsTextTransform(theme)
  theme.alerts = getAlerts(theme)
  theme.avatars = getAvatars(theme)
  theme.buttons = getButtons(theme)
  theme.breadcrumbs = getBreadcrumbs(theme)
  // TODO: should be removed when all fields have been migrated to their own packageName/theme.js file
  theme.toasts = getToasts(theme)
  theme.paginations = getPaginations(theme)
  theme.tabs = getTabs(theme)
  theme.tags = getTags(theme)
  theme.texts = getTexts(theme)
  theme.tooltips = getTooltips(theme)
  theme.links = getLinks(theme)
  theme.dropdownMenu = getDropdownMenu(theme)
  theme.tables = getTables(theme)
  theme.cards = getCards(theme)
  theme.modals = getModals(theme)
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

  theme = merge(theme, rest)

  return theme
}
