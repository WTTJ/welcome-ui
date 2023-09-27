'use client'
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Tag } from '@welcome-ui/tag'
import { Flex } from '@welcome-ui/flex'

import * as TYPES from '../../../../utils/propTypes'
import { Text } from '@welcome-ui/text'
import { kebabCase } from 'lodash'

type Value = {
  name: string
  value: any
}

type Property = [
  [name: string],
  {
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
]

type PropertiesProps = {
  items: {
    [name: string]: { props: Property[] }
  }[]
}

type PropertyProps = {
  item: Property
}

const removeQuote = (str?: string) => str?.toString()?.replace(/'/g, '')

const isArray = Array.isArray

const reactTypes = ['ElementType<any>']

const Type = ({ type }: { type: Property[1]['type'] }) => {
  if (!type) {
    return null
  }
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
      return (
        <Flex gap="md">
          {values.map((value: string) => (
            <pre key={value}>{removeQuote(value)}</pre>
          ))}
        </Flex>
      )
    }
  }

  // Union
  if (name === 'union' && isArray(value)) {
    return <pre>{value.map(v => v.name).join(' | ')}</pre>
  }

  // Custom
  if (name === 'custom') {
    return <pre>{raw}</pre>
  }

  // Fallback
  return <pre>{name}</pre>
}

export function Property({ item }: PropertyProps) {
  const [name, options] = item
  const { defaultValue, description, required, type } = options

  const defaultLabel = removeQuote(defaultValue?.value)

  if (!type) {
    return null
  }

  return (
    <Box>
      <Flex gap="md" direction="row" alignItems="center">
        <Tag fontSize="h5" w="fit-content" as="h3" m="0">
          {name}
        </Tag>
        {required && <span>Required</span>}
      </Flex>
      {defaultLabel && <div>{defaultLabel}</div>}
      <Type type={type} />
      {description && <div>{description}</div>}
    </Box>
  )
}

export function Properties({ items }: PropertiesProps) {
  if (!items) {
    return (
      <Box as="p" pt="lg">
        No props specified
      </Box>
    )
  }

  return Object.entries(items).map(props => {
    const name = props[0]
    const { props: properties } = props[1]

    return (
      <section key={`section_${name}`}>
        <Text variant="h2" id={kebabCase(name.toString())}>
          {name}
        </Text>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {Object.entries(properties).map(item => (
            // @ts-ignore
            <Property key={`section_${name}_${item[0]}`} item={item} />
          ))}
        </div>
      </section>
    )
  })
}
