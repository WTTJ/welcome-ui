import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'

import * as S from './styles'

export const Tag = ({ children, rounded, size = 'md', variant = 'default', ...props }) => {
  return (
    <S.Wrapper length={children.length} rounded={rounded} size={size} variant={variant} {...props}>
      {children}
    </S.Wrapper>
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
    'green',
    'orange',
    'pink',
    'primary',
    'purple',
    'red',
    'secondary',
    'turquoize',
    'yellow'
  ])
}
