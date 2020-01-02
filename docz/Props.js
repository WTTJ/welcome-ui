/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
import React from 'react'

import { Box } from '../packages/Box/index'
import { Tag } from '../packages/Tag/index'
import * as TYPES from '../packages/Core/utils/propTypes'

import * as S from './Props.styled'

const removeQuote = str => str.replace(/'/g, '')

const getType = ({ name, raw, value }) => {
  if (name === 'enum') {
    if (Array.isArray(value)) {
      return (
        <Box mb="-sm">
          {value.map(val => (
            <Tag key={val.value} mb="sm" mr="sm">
              {removeQuote(val.value)}
            </Tag>
          ))}
        </Box>
      )
    } else if (Array.isArray(TYPES[value])) {
      return (
        <Box mb="-sm">
          {TYPES[value].map(val => (
            <Tag key={val} mb="sm" mr="sm">
              {removeQuote(val)}
            </Tag>
          ))}
        </Box>
      )
    } else {
      return name
    }
  } else if (name === 'union') {
    if (Array.isArray(value)) {
      let values = []
      value.map(val => values.push(val.name))
      return values.join(' | ')
    } else {
      return name
    }
  } else if (name === 'custom') {
    return raw
  } else {
    return name
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
                <Box as="p" color="nude.700" fontSize="body4" m={0} mt="xs">
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
