/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react'

import { NavigationLink } from './NavigationLink'
import * as S from './Navigation.styled'

const ITEMS = {
  components: [
    'Accordion',
    'Alert',
    'Avatar',
    'Badge',
    'Box',
    'Breadcrumb',
    'Button',
    'Card',
    'DropdownMenu',
    'Group',
    'Hint',
    'Icon',
    'IconFont',
    'Label',
    'Link',
    'Loader',
    'Modal',
    'Pagination',
    'Popover',
    'Shape',
    'Stack',
    'Swiper',
    'Table',
    'Tabs',
    'Tag',
    'Text',
    'Toast',
    'Tooltip'
  ],
  fields: [
    'Intro',
    'Refs',
    'Checkbox',
    'DatePicker',
    'DateTimePicker',
    'FileDrop',
    'FileUpload',
    'InputText',
    'MarkdownEditor',
    'Picker',
    'RadioGroup',
    'RadioTab',
    'Search',
    'Select',
    'Textarea',
    'TimePicker',
    'Toggle'
  ],
  gettingStarted: ['Installation', 'Contributing', 'Upgrade'],
  theming: ['Basics', 'Custom', 'XStyled'],
  utilities: ['Copy']
}

const slugify = name => {
  return name
    .replace(/([A-Z])/g, '-$1')
    .trim()
    .toLowerCase()
    .substr(1)
}

export const Navigation = ({ hideModal }) => {
  const closeModal = useCallback(() => {
    hideModal && hideModal()
  }, [hideModal])

  return (
    <nav>
      <S.Ul>
        <S.MainTitle as="div">Getting started</S.MainTitle>
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
      <S.Ul>
        <S.MainTitle as="div">Components</S.MainTitle>
        {ITEMS.components.map((item, key) => (
          <S.Li key={`component_${key}`} onClick={closeModal}>
            <NavigationLink href={`/components/${slugify(item)}`} passHref>
              <S.Item>{item}</S.Item>
            </NavigationLink>
          </S.Li>
        ))}
      </S.Ul>
      <S.Ul>
        <S.MainTitle as="div">Fields</S.MainTitle>
        {ITEMS.fields.map((item, key) => (
          <S.Li key={`fields_${key}`} onClick={closeModal}>
            <NavigationLink href={`/fields/${slugify(item)}`} passHref>
              <S.Item>{item}</S.Item>
            </NavigationLink>
          </S.Li>
        ))}
      </S.Ul>
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
