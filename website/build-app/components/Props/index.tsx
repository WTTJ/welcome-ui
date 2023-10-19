'use client'
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Tag } from '@welcome-ui/tag'
import { Flex } from '@welcome-ui/flex'
import { Text } from '@welcome-ui/text'
import { kebabCase } from 'lodash'

import * as TYPES from '../../../../utils/propTypes'

type Value = {
  name: string
  value: string
}

export type Property = [
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

export type PropertiesProps = {
  items: {
    [name: string]: { props: Property[] }
  }[]
}

type PropertyProps = {
  item: Property
  parentName: string
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

export const Property = ({ item, parentName }: PropertyProps) => {
  const [name, options] = item
  const { defaultValue, description, required, type } = options

  const defaultLabel = removeQuote(defaultValue?.value)

  if (!type) {
    return null
  }

  return (
    <Box>
      <Flex alignItems="center" direction="row" gap="md">
        <Tag as="h3" fontSize="h5" id={kebabCase(`${parentName}_${name}`)} m="0" w="fit-content">
          {name}
        </Tag>
        {required && <span>Required</span>}
      </Flex>
      {defaultLabel && <div>{defaultLabel}</div>}
      {getType(type)}
      {description && <div>{description}</div>}
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
    <div>
      {Object.entries(items).map(props => {
        const name = props[0]
        const parentName = kebabCase(name.toString())
        const { props: properties } = props[1]

        return (
          <section key={`section_${name}`}>
            <Text id={parentName} variant="h2">
              {name}
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {Object.entries(properties).map(item => (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <Property item={item} key={`section_${name}_${item[0]}`} parentName={parentName} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
