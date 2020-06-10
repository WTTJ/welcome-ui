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
import { getFields } from '../../Field/theme'
import { getIcons } from '../../Icon/theme'
import { getTags } from '../../Tag/theme'
import { getTooltips } from '../../Tooltip/theme'
import { getDropdownMenu } from '../../DropdownMenu/theme'
import { getCards } from '../../Card/theme'
import { getModals } from '../../Modal/theme'
import { getLoaders } from '../../Loader/theme'
import { getAccordions } from '../../Accordion/theme'
import { getSwipers } from '../../Swiper/theme'
import { checkboxes } from '../../Checkbox/theme'
import { tables } from '../../Table/theme'
import { labels } from '../../Label/theme'
import { toggles } from '../../Toggle/theme'
import { dateTimePickerCommon } from '../../DateTimePickerCommon/theme'
import { textareas } from '../../Textarea/theme'
import { filedrops } from '../../FileDrop/theme'
import { radios } from '../../Radio/theme'
import { getRadioTabs } from '../../RadioTab/theme'

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

const DEFAULT_FONT_SIZE = 16
const DEFAULT_FONT_FAMILY = 'work-sans'
const HEADING_FONT_FAMILY = 'welcome-font'
const ICON_FONT_FAMILY = 'welcome-icon-font'

export const createTheme = (options = {}) => {
  let {
    defaultFontFamily = DEFAULT_FONT_FAMILY,
    headingFontFamily = HEADING_FONT_FAMILY,
    iconFontFamily = ICON_FONT_FAMILY,
    ...rest
  } = options

  let theme = {}

  theme.transformers = { ...rpxTransformers }

  theme.toEm = px => `${px / DEFAULT_FONT_SIZE}em`
  theme.toRem = px => `${px / DEFAULT_FONT_SIZE}rem`

  theme.colors = {
    ...colors,
    underline: colors.primary[100],
    overlay: hexToRGBA(colors.dark[900], 0.55)
  }

  // fonts
  theme.fontFaces = fontFaces
  theme.fontSizes = getFontSizes('rem', theme)
  theme.lineHeights = getLineHeights(theme)
  theme.fontWeights = {
    regular: '400',
    medium: '500',
    bold: '600',
    black: '700'
  }
  theme.letterSpacings = getLetterSpacings(theme)
  theme.fonts = {
    texts: defaultFontFamily,
    headings: headingFontFamily,
    icons: iconFontFamily
  }

  theme.borderWidths = {
    sm: '1px',
    md: '2px'
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
    '2lg': theme.toRem(30),
    '2xl': theme.toRem(40)
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
  theme.underline = getUnderline(theme)
  theme.textsFontWeights = getTextsFontWeights(theme)
  theme.textsFontFamily = getTextsFontFamily(theme)
  theme.textsTextTransform = getTextsTextTransform(theme)
  theme.textsTextTransform = getTextsTextTransform(theme)
  theme.alerts = getAlerts(theme)
  theme.avatars = getAvatars(theme)
  theme.buttons = getButtons(theme)
  theme.breadcrumbs = getBreadcrumbs(theme)
  // TODO: should be removed when all fields have been migrated to their own packageName/theme.js file
  theme.fields = getFields(theme)
  theme.toasts = getToasts(theme)
  theme.paginations = getPaginations(theme)
  theme.tabs = getTabs(theme)
  theme.tags = getTags(theme)
  theme.texts = getTexts(theme)
  theme.tooltips = getTooltips(theme)
  theme.links = getLinks(theme)
  theme.dropdownMenu = getDropdownMenu(theme)
  theme.tables = tables
  theme.cards = getCards(theme)
  theme.modals = getModals(theme)
  theme.loaders = getLoaders(theme)
  theme.accordions = getAccordions(theme)
  theme.swipers = getSwipers(theme)
  theme.labels = labels
  // fields
  theme.defaultFields = getDefaultFields(theme)
  theme.checkboxes = checkboxes
  theme.toggles = toggles
  theme.dateTimePickerCommon = dateTimePickerCommon
  theme.textareas = textareas
  theme.filedrops = filedrops
  theme.radios = radios
  theme.radioTabs = getRadioTabs(theme)

  theme = merge(theme, rest)

  return theme
}
