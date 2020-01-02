/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
import React from 'react'

import { Box } from '../packages/Box/index'
import { Tag } from '../packages/Tag/index'
import * as TYPES from '../packages/Core/utils/propTypes'

import * as S from './Props.styled'

const removeQuote = str => str.replace(/'/g, '')

const isArray = Array.isArray

const Type = ({ type }) => {
  const { name, raw, value } = type

  // Enum
  if (name === 'enum') {
    let values
    if (isArray(value)) { values = value.map(v => v.value) }
    else if (isArray(TYPES[value])) { values = TYPES[value] }

    if (values) {
      return (
        <Box mb="-sm">
          {values.map(value => (
            <Tag key={value} mb="sm" mr="sm">
              {removeQuote(value)}
            </Tag>
          ))}
        </Box>
      )
    }
  }

  // Union
  if (name === 'union' && isArray(value)) {
    return value.map(v => v.name).join(' | ')
  }

  // Custom
  if (name === 'custom') {
    return raw
  }

  // Fallback
  return name
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
              <Type type={item.type} />
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
