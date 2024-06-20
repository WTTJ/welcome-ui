'use client'
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Badge } from '@welcome-ui/badge'
import { Flex } from '@welcome-ui/flex'
import { Text } from '@welcome-ui/text'

import * as TYPES from '../../../../utils/propTypes'
import { Code } from '../Mdx/Code'
import { H2 } from '../Mdx/Headings'

type Value = {
  name: string
  value: string
}

type Props = {
  defaultValue: {
    value: string
  } | null
  description: string
  required: boolean
  type: {
    name?: string
    raw?: string
    value?: Value[]
  }
}

export type Property = {
  [name: string]: Props
}

export type PropertiesProps = {
  items: {
    [name: string]: { props: Property }
  }
}

type PropertyProps = {
  name: string
  options: Props
}

const removeQuote = (str?: string) => str?.toString()?.replace(/'/g, '')
const isArray = Array.isArray
const reactTypes = ['ElementType<any>']

const getType = (type: Property[1]['type']) => {
  if (!type) return null

  const { name, raw, value } = type

  if (raw && reactTypes.includes(raw)) {
    return `React.${raw}`
  }

  if (raw === 'boolean') return 'Boolean'

  // Enum
  if (name === 'enum' && value) {
    let values
    if (isArray(value)) {
      values = value.map(v => v.value)
    } else if (isArray(TYPES[value])) {
      values = TYPES[value]
    }

    if (values) {
      return values.map((value: string, index: number) => (
        <>
          {index !== 0 && ' | '}
          {removeQuote(value)}
        </>
      ))
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

export const Property = ({ name, options }: PropertyProps) => {
  const { defaultValue, description, required, type } = options

  const defaultLabel = removeQuote(defaultValue?.value)

  if (!type) {
    return null
  }

  return (
    <Box>
      <Flex
        alignItems="center"
        borderBottom="1px solid"
        borderBottomColor="border"
        gap="md"
        mb="md"
        pb="md"
      >
        <Code>{name}</Code>
        {required && <Badge variant="primary">Required</Badge>}
      </Flex>
      <Text color="dark-900">
        {getType(type)}
        <Box as="span" color="dark-700">
          {defaultLabel && ` | undefined = ${defaultLabel}`}
        </Box>
      </Text>
      {description && (
        <Text mt="sm" variant="sm">
          {description}
        </Text>
      )}
    </Box>
  )
}

export const Properties = ({ items }: PropertiesProps) => {
  if (!items) {
    return (
      <Box as="p" pt="lg">
        No props specified
      </Box>
    )
  }

  return (
    <Flex direction="column" gap="3xl">
      {Object.entries(items).map(props => {
        const name = props[0]
        const { props: properties } = props[1]

        return (
          <section key={`section_${name}`}>
            {name && <H2 mt={0}>{name}</H2>}
            <Flex direction="column" gap="xl" mt="md">
              {Object.entries(properties).map(item => (
                <Property key={`section_${name}_${item[0]}`} name={item[0]} options={item[1]} />
              ))}
            </Flex>
          </section>
        )
      })}
    </Flex>
  )
}
