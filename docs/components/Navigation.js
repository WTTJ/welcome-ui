/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react'

import { slugify } from '../utils'

import { NavigationLink } from './NavigationLink'
import * as S from './Navigation.styled'

const ITEMS = {
  dataDisplay: ['Accordion', 'Avatar', 'Badge', 'Card', 'Swiper', 'Table', 'Tag'],
  feedback: ['Alert', 'Toast'],
  forms: [
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
    'Toggle'
  ],
  button: ['Button', 'ButtonLink'],
  gettingStarted: ['Installation', 'Contributing', 'Upgrade'],
  icons: ['Emoji', 'Icons', 'IconsFont'],
  layout: ['Box', 'Group', 'Loader', 'Shape', 'Stack'],
  navigation: ['Breadcrumb', 'DropdownMenu', 'Link', 'Pagination', 'Tabs'],
  overlay: ['Drawer', 'Modal', 'Popover', 'Tooltip'],
  theming: ['Basics', 'Customize', 'XStyled'],
  typography: ['Text'],
  utilities: ['useCopyText']
}

const CATEGORIES = [
  { name: 'Layout', value: ITEMS.layout },
  { name: 'Button', value: ITEMS.button },
  { name: 'Forms', value: ITEMS.forms },
  { name: 'Typography', value: ITEMS.typography },
  { name: 'Data Display', value: ITEMS.dataDisplay },
  { name: 'Feedback', value: ITEMS.feedback },
  { name: 'Overlay', value: ITEMS.overlay },
  { name: 'Navigation', value: ITEMS.navigation },
  { name: 'Icons', value: ITEMS.icons }
]

export const Navigation = ({ hideModal }) => {
  const closeModal = useCallback(() => {
    hideModal && hideModal()
  }, [hideModal])

  return (
    <nav>
      <S.Ul>
        <S.MainTitle as="div" mt="0">
          Getting started
        </S.MainTitle>
        {ITEMS.gettingStarted.map((item, key) => (
          <S.Li key={`getting_started_${key}`} onClick={closeModal}>
            <NavigationLink href={`/${slugify(item)}`} passHref>
              <S.Item>{item}</S.Item>
            </NavigationLink>
          </S.Li>
        ))}
      </S.Ul>
      <S.Ul>
        <S.MainTitle as="div">Theming</S.MainTitle>
        {ITEMS.theming.map((item, key) => (
          <S.Li key={`theming_${key}`} onClick={closeModal}>
            <NavigationLink href={`/theming/${slugify(item)}`} passHref>
              <S.Item>{item}</S.Item>
            </NavigationLink>
          </S.Li>
        ))}
      </S.Ul>
      {CATEGORIES.map((category, key) => (
        <S.Ul key={`category_${key}`}>
          <S.MainTitle as="div">{category.name}</S.MainTitle>
          {category.value.map((item, key) => (
            <S.Li key={`category_${category.name}_component_${key}`} onClick={closeModal}>
              <NavigationLink href={`/components/${slugify(item)}`} passHref>
                <S.Item>{item}</S.Item>
              </NavigationLink>
            </S.Li>
          ))}
        </S.Ul>
      ))}
      <S.Ul>
        <S.MainTitle as="div">Utilities</S.MainTitle>
        {ITEMS.utilities.map((item, key) => (
          <S.Li key={`utilities_${key}`} onClick={closeModal}>
            <NavigationLink href={`/utilities/${slugify(item)}`} passHref>
              <S.Item>{item}</S.Item>
            </NavigationLink>
          </S.Li>
        ))}
      </S.Ul>
    </nav>
  )
}
