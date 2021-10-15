import React from 'react'
import { IconProps } from '@welcome-ui/icon'

import { Icon } from './styles'
import unicodeMap from './unicode.json'

export const IconFont = Icon

// todo move toCamelCase/toPascalCase on ts file
const toCamelCase = (str: string): string => str.replace(/_(\w)/g, ($, $1) => $1.toUpperCase())

const toPascalCase = (str: string) => {
  const camelCase = toCamelCase(str)
  return `${camelCase.charAt(0).toUpperCase()}${camelCase.substr(1)}`
}

export const Icons = Object.keys(unicodeMap).reduce(
  (prev: Record<string, (props: IconProps) => JSX.Element>, name: keyof typeof unicodeMap) => {
    const key = toPascalCase(name) as keyof typeof unicodeMap
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    prev[key] = (props: IconProps) => <Icon {...props} name={name} />
    return prev
  },
  {}
)
