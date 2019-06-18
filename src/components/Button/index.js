import React, { forwardRef } from 'react'
import { bool, node, oneOf } from 'prop-types'

import { IconButton } from '../IconButton'

import * as S from './styles'

const Button = forwardRef(
  ({ children, disabled, size = 'md', variant = 'primary', ...rest }, ref) => (
    <S.Button
      data-testid="button"
      disabled={disabled}
      ref={ref}
      size={size}
      variant={disabled ? 'disabled' : variant}
      {...rest}
    >
      {children}
    </S.Button>
  )
)

Button.displayName = 'Button'

Button.propTypes = {
  children: node,
  disabled: bool,
  size: oneOf(['xs', 'sm', 'md', 'lg']),
  variant: oneOf([
    'primary',
    'secondary',
    'tertiary',
    'primary-warning',
    'secondary-warning',
    'primary-danger',
    'secondary-danger'
  ])
}

export { Button, IconButton }
