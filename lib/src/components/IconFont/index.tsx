import React from 'react'

import { IconProps } from '../Icon'

import { Icon, StyledIconProps } from './styles'
import unicodeJson from './unicode.json'

export type IconFontProps = StyledIconProps
export const IconFontStyled = Icon

type FormatIconJSX<S extends string> = S extends `${infer F}${infer R}`
  ? F extends '_'
    ? FormatIconJSX<Capitalize<R>>
    : `${F}${FormatIconJSX<R>}`
  : ''

// this is usefull to add the keys on the declaration file
const unicodeMap = { ...unicodeJson }

export type IconKey = keyof typeof unicodeMap
export type IconKeyFormatted = FormatIconJSX<Capitalize<IconKey>>
export type IconsType = Record<IconKeyFormatted, (props: IconProps) => JSX.Element>

const toPascalCase = (str: string) => {
  const camelCase = str.replace(/_(\w)/g, ($, $1) => $1.toUpperCase())
  return `${camelCase.charAt(0).toUpperCase()}${camelCase.substr(1)}`
}

const iconsKeys = Object.keys(unicodeMap) as IconKey[]

export const IconFont = iconsKeys.reduce<IconsType>((prev, name) => {
  const key = toPascalCase(name) as IconKeyFormatted

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
}, {} as IconsType)
