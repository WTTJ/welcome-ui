import React from 'react'

import { toPascalCase } from '../../src/utils/toPascalCase'

import { Icon } from './styles'
import { unicodeMap } from './unicode'

export const IconFont = Icon

export const Icons = Object.keys(unicodeMap).reduce((prev, name) => {
  const key = toPascalCase(name)
  // eslint-disable-next-line react/display-name
  prev[key] = props => <Icon {...props} name={name} />
  return prev
}, {})
