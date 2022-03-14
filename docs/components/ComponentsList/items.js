import { useRouter } from 'next/router'

import { slugify } from '../../utils'

export const ITEMS = {
  dataDisplay: ['Accordion', 'Avatar', 'Badge', 'Card', 'Swiper', 'Table', 'Tag'],
  feedback: ['Alert', 'Toast'],
  forms: [
    'Button',
    'ButtonGroup',
    'Checkbox',
    'DatePicker',
    'DateTimePicker',
    'EmojiPicker',
    'Field',
    'FileDrop',
    'FileUpload',
    'Hint',
    'HookForm',
    'InputText',
    'Label',
    'MarkdownEditor',
    'PasswordInput',
    'Picker',
    'RadioGroup',
    'RadioTab',
    'Search',
    'Select',
    'Textarea',
    'TimePicker',
    'Toggle',
  ],
  gettingStarted: ['Installation', 'Contributing', 'Upgrade'],
  icons: ['Emoji', 'Icons', 'IconsFont'],
  layout: ['AspectRatio', 'Box', 'Flex', 'Grid', 'Loader', 'Shape', 'Stack'],
  navigation: ['Breadcrumb', 'DropdownMenu', 'Link', 'Pagination', 'Tabs'],
  overlay: ['Drawer', 'Modal', 'Popover', 'Tooltip'],
  theming: ['Basics', 'Customize'],
  typography: ['Text'],
  utilities: ['useCopyText'],
}

export const CATEGORIES = [
  { name: 'Layout', value: ITEMS.layout },
  { name: 'Forms', value: ITEMS.forms },
  { name: 'Typography', value: ITEMS.typography },
  { name: 'Data Display', value: ITEMS.dataDisplay },
  { name: 'Feedback', value: ITEMS.feedback },
  { name: 'Overlay', value: ITEMS.overlay },
  { name: 'Navigation', value: ITEMS.navigation },
  { name: 'Icons', value: ITEMS.icons },
]

// get a better way with next routing ?
export function useGetPreviousAndNextLinks() {
  const { pathname } = useRouter()

  // create array of all routes in order of navigation
  let routes = []
  ITEMS.gettingStarted?.map(item => routes.push({ route: `/${slugify(item)}`, name: item }))
  ITEMS.theming?.map(item => routes.push({ route: `/theming/${slugify(item)}`, name: item }))
  CATEGORIES?.map(category =>
    category?.value?.map(item => routes.push({ route: `/components/${slugify(item)}`, name: item }))
  )
  ITEMS.utilities?.map(item => routes.push({ route: `/utilities/${slugify(item)}`, name: item }))

  // find previous and next routes
  const routesLength = routes.length
  const indexOfActualRoute = routes.findIndex(({ route }) => route === pathname)
  const previous = indexOfActualRoute === 0 ? undefined : routes[indexOfActualRoute - 1]
  const next = indexOfActualRoute === routesLength ? undefined : routes[indexOfActualRoute + 1]

  return {
    previous,
    next,
  }
}
