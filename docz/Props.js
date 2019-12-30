/* eslint-disable react/prop-types */
import React from 'react'

import { Box } from '../packages/Box/index'
import { Tag } from '../packages/Tag/index'

import * as S from './Props.styled'

const removeQuote = str => str.replace(/'/g, '')

const getType = type => {
  if (type.name === 'enum') {
    if (Array(type.value).isArray) {
      return (
        <Box mb="-sm">
          {type.value.map(val => (
            <Tag key={val.value} mb="sm" mr="sm">
              {removeQuote(val.value)}
            </Tag>
          ))}
        </Box>
      )
    } else {
      return type.name
    }
  } else if (type.name === 'union') {
    if (Array(type.value).isArray) {
      let values = []
      type.value.map(val => values.push(val.name))
      return values.join(' | ')
    } else {
      return type.name
    }
  } else if (type.name === 'custom') {
    return type.raw
  } else {
    return type.name
  }
}

export const Props = ({ props }) => {
  const keys = Object.keys(props)

  return (
    <S.Props>
      {keys.map(key => {
        const item = props[key]

        return (
          <S.Item key={key}>
            <S.Name>{key}</S.Name>
            <S.Type>
              {getType(item.type)}
              {item.description && (
                <Box as="p" color="nude.700" fontSize="meta2" m={0} mt="xs">
                  {item.description[0].props.children}
                </Box>
              )}
            </S.Type>
            <S.Value>
              {item.required ? (
                <>
                  required <S.ValueRequired>*</S.ValueRequired>
                </>
              ) : (
                item.defaultValue && removeQuote(item.defaultValue.value)
              )}
            </S.Value>
          </S.Item>
        )
      })}
    </S.Props>
  )
}
