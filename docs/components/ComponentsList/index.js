import { Box } from '@welcome-ui/box'
import React from 'react'
import { Badge } from '@welcome-ui/badge'

import { slugify } from '../../utils'

import { CATEGORIES, ITEMS } from './items'
import { Link } from './Link'
import * as S from './styles'
import { VersionSelector } from './VersionSelector'

const newItems = ['slider']

export const ComponentsList = ({ onClick, ...props }) => {
  return (
    <>
      <VersionSelector />
      <Box as="nav" {...props}>
        <S.Ul>
          <S.MainTitle as="div" mt="0">
            Getting started
          </S.MainTitle>
          {ITEMS.gettingStarted.map(item => (
            <S.Li key={`getting_started_${item}`} onClick={onClick}>
              <Link href={`/${slugify(item)}`} passHref>
                <S.Item>{item}</S.Item>
              </Link>
            </S.Li>
          ))}
        </S.Ul>
        <S.Ul>
          <S.MainTitle as="div">Theming</S.MainTitle>
          {ITEMS.theming.map(item => (
            <S.Li key={`theming_${item}`} onClick={onClick}>
              <Link href={`/theming/${slugify(item)}`} passHref>
                <S.Item>{item}</S.Item>
              </Link>
            </S.Li>
          ))}
        </S.Ul>
        {CATEGORIES.map(category => (
          <S.Ul key={`category_${category.name}`}>
            <S.MainTitle as="div">{category.name}</S.MainTitle>
            {category.value.map(item => (
              <S.Li key={`category_${category.name}_component_${item}`} onClick={onClick}>
                <Link href={`/components/${slugify(item)}`} passHref>
                  <S.Item>
                    {item}
                    {newItems.includes(slugify(item)) ? (
                      <Badge size="sm" variant="primary">
                        new
                      </Badge>
                    ) : null}
                  </S.Item>
                </Link>
              </S.Li>
            ))}
          </S.Ul>
        ))}
        <S.Ul>
          <S.MainTitle as="div">Utilities</S.MainTitle>
          {ITEMS.utilities.map(item => (
            <S.Li key={`utilities_${item}`} onClick={onClick}>
              <Link href={`/utilities/${slugify(item)}`} passHref>
                <S.Item>{item}</S.Item>
              </Link>
            </S.Li>
          ))}
        </S.Ul>
      </Box>
    </>
  )
}
