'use client'
import { kebabCase } from 'lodash'
import React from 'react'

import { Badge } from '@old/Badge'
import { Flex } from '@old/Flex'
import { Text } from '@old/Text'

import { Code } from '../Mdx/Code'
import { H2 } from '../Mdx/Headings'

import * as TYPES from './propTypes'

export type PropertiesProps = {
  items: {
    [name: string]: { props: Property }
  }
}

export type Property = {
  [name: string]: Props
}

type PropertyProps = {
  id: string
  name: string
  options: Props
}

type Props = {
  defaultValue: null | {
    value: string
  }
  description: string
  required: boolean
  type: {
    name?: string
    raw?: string
    value?: Value[]
  }
}

type Value = {
  name: string
  value: string
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

export const Property = ({ id, name, options }: PropertyProps) => {
  const { defaultValue, description, required, type } = options

  const defaultLabel = removeQuote(defaultValue?.value)

  if (!type) {
    return null
  }

  return (
    <div className="mt-lg scroll-mt-[170px]" id={id}>
      <Flex
        alignItems="center"
        borderBottom="1px solid"
        borderBottomColor="neutral-30"
        gap="md"
        mb="md"
        pb="md"
      >
        <Code>{name}</Code>
        {required ? <Badge variant="primary">Required</Badge> : null}
      </Flex>
      <Text color="neutral-90">
        {getType(type)}
        <span className="text-neutral-70">
          {defaultLabel ? ` | undefined = ${defaultLabel}` : null}
        </span>
      </Text>
      {description ? (
        <Text mt="sm" variant="sm">
          {description}
        </Text>
      ) : null}
    </div>
  )
}

export const Properties = ({ items }: PropertiesProps) => {
  if (!items) {
    return <p className="pt-lg">No props specified</p>
  }

  return (
    <Flex direction="column" gap="3xl">
      {Object.entries(items).map(props => {
        const name = props[0]
        const { props: properties } = props[1]

        return (
          <section key={kebabCase(`property_${name}`)}>
            {name ? <H2 mt={0}>{name}</H2> : null}
            <Flex direction="column" gap="xl" mt="md">
              {Object.entries(properties).map(item => (
                <Property
                  id={kebabCase(`${name}_${item[0]}`)}
                  key={kebabCase(`property_${name}_${item[0]}`)}
                  name={item[0]}
                  options={item[1]}
                />
              ))}
            </Flex>
          </section>
        )
      })}
    </Flex>
  )
}
