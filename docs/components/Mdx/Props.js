/* eslint-disable react/jsx-max-depth */

/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Tag } from '@welcome-ui/tag'
import { Table } from '@welcome-ui/table'
import { Tooltip } from '@welcome-ui/tooltip'
import { Card } from '@welcome-ui/card'
import { CheckIcon } from '@welcome-ui/icons'

import * as TYPES from '../../../utils/propTypes'

const removeQuote = str => str?.toString()?.replace(/'/g, '')

const isArray = Array.isArray

const reactTypes = ['ElementType<any>']

const Type = ({ type }) => {
  if (!type) {
    return null
  }
  const { name, raw, value } = type

  if (reactTypes.includes(raw)) {
    return `React.${raw}`
  }

  if (raw === 'boolean') return 'Boolean'

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
    return (
      <Box as="p" pt="lg">
        No props specified
      </Box>
    )
  }

  const { props } = propTypes

  return (
    <Box>
      <Card mt="xxl">
        <Card.Body color="dark-900">
          <Table marginBottom="-lg" marginTop="-lg">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Type(s)</Table.Th>
                <Table.Th>Default</Table.Th>
                <Table.Th textAlign="center">Required</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {Object.keys(props).map(key => {
                const { defaultValue, description, required, type } = props[key]

                if (!type) {
                  return null
                }

                const defaultLabel = removeQuote(defaultValue?.value)

                return (
                  <Table.Tr key={key}>
                    <Table.Td color="dark-900" fontWeight="bold" w="20%">
                      {key}
                    </Table.Td>
                    <Table.Td w="50%">
                      <Box>
                        <Type type={type} />
                        {description && (
                          <Box as="p" color="dark-700" fontSize="xs" m={0} mt="sm">
                            {description}
                          </Box>
                        )}
                      </Box>
                    </Table.Td>
                    <Table.Td maxW={250} w="15%">
                      {defaultValue && <Tag title={defaultLabel}>{defaultLabel}</Tag>}
                    </Table.Td>
                    <Table.Td textAlign="center" w="15%">
                      {required && (
                        <Tag shape="circle" variant="primary">
                          <CheckIcon />
                        </Tag>
                      )}
                    </Table.Td>
                  </Table.Tr>
                )
              })}
            </Table.Tbody>
          </Table>
        </Card.Body>
      </Card>
    </Box>
  )
}
