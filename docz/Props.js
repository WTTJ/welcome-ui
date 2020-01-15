/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
import React from 'react'

import { Box } from '../packages/Box/index'
import { Tag } from '../packages/Tag/index'
import { Table } from '../packages/Table/index'
import { Tooltip } from '../packages/Tooltip/index'
import { Card } from '../packages/Card'
import { CheckIcon } from '../icons'
import * as TYPES from '../src/utils/propTypes'

const removeQuote = str => str.replace(/'/g, '')

const isArray = Array.isArray

const Type = ({ type }) => {
  const { name, raw, value } = type

  // Enum
  if (name === 'enum') {
    let values
    if (isArray(value)) {
      values = value.map(v => v.value)
    } else if (isArray(TYPES[value])) {
      values = TYPES[value]
    }

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
    <Card>
      <Card.Body padding="xl">
        <Table marginBottom="-lg" marginTop="-xl">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th>Type(s)</Table.Th>
              <Table.Th>Default</Table.Th>
              <Table.Th textAlign="center">Required</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {keys.map(key => {
              const item = props[key]

              return (
                <Table.Tr key={key}>
                  <Table.Td color="primary.500" width="20%">
                    {key}
                  </Table.Td>
                  <Table.Td width="50%">
                    <Box>
                      <Type type={item.type} />
                      {item.description && (
                        <Box as="p" color="nude.600" fontSize="body3" m={0} mt="xs">
                          {item.description[0].props.children}
                        </Box>
                      )}
                    </Box>
                  </Table.Td>
                  <Table.Td width="15%">
                    {item.defaultValue && <Tag>{removeQuote(item.defaultValue.value)}</Tag>}
                  </Table.Td>
                  <Table.Td textAlign="center" width="15%">
                    {item.required && (
                      <Tooltip content="is required">
                        <Box display="inline">
                          <CheckIcon color="primary.500" />
                        </Box>
                      </Tooltip>
                    )}
                  </Table.Td>
                </Table.Tr>
              )
            })}
          </Table.Tbody>
        </Table>
      </Card.Body>
    </Card>
  )
}
