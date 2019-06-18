import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export const Tag = forwardRef(
  ({ children, rounded, size = 'md', variant = 'default', ...props }, ref) => (
    <S.Tag
      data-testid="tag"
      length={children.length}
      ref={ref}
      rounded={rounded}
      size={size}
      variant={variant}
      {...props}
    >
      {children}
    </S.Tag>
  )
)

Tag.displayName = 'Tag'

Tag.propTypes = {
  children: PropTypes.node,
  /** set a border-radius to 1em  */
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf([
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
