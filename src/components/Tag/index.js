import React from 'react'
import { bool, node, oneOf } from 'prop-types'

import * as S from './styles'

export const Tag = ({ children, rounded, size = 'md', variant = 'default', ...props }) => {
  return (
    <S.Tag length={children.length} rounded={rounded} size={size} variant={variant} {...props}>
      {children}
    </S.Tag>
  )
}

Tag.propTypes = {
  children: node,
  /** set a border-radius to 1em  */
  rounded: bool,
  size: oneOf(['sm', 'md', 'lg']),
  variant: oneOf([
    'blue',
    'default',
    'error',
    'green',
    'info',
    'orange',
    'pink',
    'primary',
    'purple',
    'red',
    'secondary',
    'turquoize',
    'warning',
    'yellow'
  ])
}
