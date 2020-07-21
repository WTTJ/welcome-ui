/* eslint-disable react/jsx-max-depth */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Tag } from '@welcome-ui/tag'
import { Table } from '@welcome-ui/table'
import { Tooltip } from '@welcome-ui/tooltip'
import { Card } from '@welcome-ui/card'
import { CheckIcon } from '@welcome-ui/icons'

import * as TYPES from '../../utils/propTypes'

const removeQuote = str => str.replace(/'/g, '')

const isArray = Array.isArray

const Type = ({ type }) => {
  if (!type) {
    return null
  }
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

export const Props = ({ propTypes }) => {
  if (!propTypes) {
    return 'No propTypes specified'
  }

  return (
    <Card>
      <Card.Body color="dark.900" padding="xl">
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
            {Object.keys(propTypes).map(key => {
              const { defaultValue, description, required, type } = propTypes[key]

              if (!type) {
                return null
              }

              return (
                <Table.Tr key={key}>
                  <Table.Td color="dark.900" fontWeight="bold" width="20%">
                    {key}
                  </Table.Td>
                  <Table.Td width="50%">
                    <Box>
                      <Type type={type} />
                      {description && (
                        <Box as="p" color="nude.600" fontSize="body3" m={0} mt="xs">
                          {description[0]?.propTypes?.children}
                        </Box>
                      )}
                    </Box>
                  </Table.Td>
                  <Table.Td width="15%">
                    {defaultValue && <Tag>{removeQuote(defaultValue?.value)}</Tag>}
                  </Table.Td>
                  <Table.Td textAlign="center" width="15%">
                    {required && (
                      <Tooltip content="is required">
                        <Tag shape="circle" variant="primary">
                          <CheckIcon />
                        </Tag>
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
