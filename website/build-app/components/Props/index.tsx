'use client'
import { kebabCase } from 'lodash'
import React from 'react'

import { Card } from '@/components/Card'
import { Tag } from '@/components/Tag'

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

const removeQuote = (str?: string) => str?.toString()?.replace(/"/g, '')
const isArray = Array.isArray
const reactTypes = ['ElementType<any>']

const getType = (type: Property[1]['type']) => {
  if (!type) return null

  const { name, raw, value } = type

  if (raw && reactTypes.includes(raw)) {
    return (
      <Tag size="md" variant="dash">
        `React.${raw}`
      </Tag>
    )
  }

  if (raw === 'boolean')
    return (
      <Tag size="md" variant="dash">
        Boolean
      </Tag>
    )

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
        <Tag key={`${value}_union_${index}`} size="md" variant="dash">
          {removeQuote(value)}
        </Tag>
      ))
    }
  }

  // Union
  if (name === 'union' && isArray(value)) {
    return value.map((v, index) => (
      <Tag key={`${v.value}_union_${index}`} size="md" variant="dash">
        {v.name}
      </Tag>
    ))
  }

  // Custom
  if (name === 'custom') {
    return (
      <Tag size="md" variant="dash">
        {raw}
      </Tag>
    )
  }

  // Fallback
  return (
    <Tag size="md" variant="dash">
      {name}
    </Tag>
  )
}

export const Property = ({ id, name, options }: PropertyProps) => {
  const { defaultValue, description, required, type } = options

  const defaultLabel = removeQuote(defaultValue?.value)

  if (!type) {
    return null
  }

  return (
    <Card className="scroll-mt-170" id={id} size="sm">
      <Card.Body className="gap-lg">
        <div className="flex items-center gap-sm">
          <Tag className="w-fit" variant="green">
            {name}
          </Tag>
          {required ? (
            <Tag className="w-fit" variant="warm">
              Required
            </Tag>
          ) : null}
          {defaultLabel ? (
            <Tag className="w-fit" variant="pink">
              {defaultLabel} (default)
            </Tag>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-sm">{getType(type)}</div>
        {description ? (
          <div className="bg-beige-10 px-lg py-sm rounded-md">{description}</div>
        ) : null}
      </Card.Body>
    </Card>
  )
}

export const Properties = ({ items }: PropertiesProps) => {
  if (!items) {
    return <p className="pt-lg">No props specified</p>
  }

  return (
    <div className="flex flex-col gap-3xl">
      {Object.entries(items).map(props => {
        const name = props[0]
        const { props: properties } = props[1]

        return (
          <div>
            {name ? <H2 className="mb-xl">{name}</H2> : null}
            <Card key={kebabCase(`property_${name}`)}>
              <Card.Body className="gap-xl">
                {Object.entries(properties).map(item => (
                  <Property
                    id={kebabCase(`${name}_${item[0]}`)}
                    key={kebabCase(`property_${name}_${item[0]}`)}
                    name={item[0]}
                    options={item[1]}
                  />
                ))}
              </Card.Body>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
