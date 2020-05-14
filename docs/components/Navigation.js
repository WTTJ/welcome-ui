/* eslint-disable react/no-array-index-key */
import React from 'react'
import Link from 'next/link'

import { NavigationLink } from './NavigationLink'
import * as S from './Navigation.styled'

const components = [
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
  'Shape',
  'Stack',
  'Swiper',
  'Table',
  'Tabs',
  'Tag',
  'Text',
  'Toast',
  'Tooltip'
]
const fields = ['Intro', 'Refs', 'Checkbox']
const theming = ['Breakpoints', 'Colors', 'Theming', 'Xstyled']
const utilities = ['Copy']

const slugify = name => {
  return name
    .replace(/([A-Z])/g, '-$1')
    .trim()
    .toLowerCase()
    .substr(1)
}

export const Navigation = () => (
  <S.Nav>
    <S.Ul>
      <Link href="/" passHref>
        <S.Main>Introduction</S.Main>
      </Link>
    </S.Ul>
    <S.Ul>
      <NavigationLink href="/getting-started" passHref>
        <S.Main>Getting started</S.Main>
      </NavigationLink>
    </S.Ul>
    <S.Ul>
      <S.Main as="div">Theming</S.Main>
      {theming.map((item, key) => (
        <S.Li key={`theming_${key}`}>
          <NavigationLink href={`/theming/${slugify(item)}`} passHref>
            <S.Item>{item}</S.Item>
          </NavigationLink>
        </S.Li>
      ))}
    </S.Ul>
    <S.Ul>
      <S.Main as="div">Components</S.Main>
      {components.map((item, key) => (
        <S.Li key={`component_${key}`}>
          <NavigationLink href={`/components/${slugify(item)}`} passHref>
            <S.Item>{item}</S.Item>
          </NavigationLink>
        </S.Li>
      ))}
    </S.Ul>
    <S.Ul>
      <S.Main as="div">Fields</S.Main>
      {fields.map((item, key) => (
        <S.Li key={`fields_${key}`}>
          <NavigationLink href={`/fields/${slugify(item)}`} passHref>
            <S.Item>{item}</S.Item>
          </NavigationLink>
        </S.Li>
      ))}
    </S.Ul>
    <S.Ul>
      <S.Main as="div">Utilities</S.Main>
      {utilities.map((item, key) => (
        <S.Li key={`utilities_${key}`}>
          <NavigationLink href={`/utilities/${slugify(item)}`} passHref>
            <S.Item>{item}</S.Item>
          </NavigationLink>
        </S.Li>
      ))}
    </S.Ul>
  </S.Nav>
)
