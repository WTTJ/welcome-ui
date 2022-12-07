import React from 'react'
import { IconProps } from '@welcome-ui/icon'

import { Icon, StyledIconProps } from './styles'
import unicodeMap from './unicode.json'

export type IconFontProps = StyledIconProps
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
    prev[key] = (props: IconProps) => {
      const className = props.className || ''
      return (
        <Icon
          {...props}
          className={`${className} wui-icon-font`}
          data-testid={props.dataTestId && `icon-font-${props.dataTestId}`}
          name={name}
        />
      )
    }
    return prev
  },
  {}
)
