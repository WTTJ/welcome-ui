import React, { forwardRef } from 'react'
import { bool, func, node, object, oneOf, oneOfType, string } from 'prop-types'

import * as S from './styles'

export const Button = forwardRef(
  ({ as, children, disabled, size = 'md', variant = 'primary', ...rest }, ref) => (
    <S.Button
      _ref={ref}
      data-testid="button"
      disabled={disabled}
      forwardedAs={as}
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
  as: oneOfType([func, object, string]),
  children: node,
  disabled: bool,
  shape: oneOf(['square', 'circle']),
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
