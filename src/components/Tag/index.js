import React, { forwardRef } from 'react'
import { node, oneOf } from 'prop-types'

import * as S from './styles'

export const Tag = forwardRef(({ children, size = 'md', variant = 'default', ...rest }, ref) => (
  <S.Tag
    data-testid="tag"
    length={children ? children.length : null}
    ref={ref}
    size={size}
    variant={variant}
    {...rest}
  >
    {children}
  </S.Tag>
))

Tag.displayName = 'Tag'

Tag.propTypes = {
  children: node,
  /** set a border-radius to 1em  */
  shape: oneOf(['square', 'circle']),
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
