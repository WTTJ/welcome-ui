import React, { forwardRef } from 'react'
import { bool, node, oneOf } from 'prop-types'

import { COMPONENT_TYPE, SHAPES_TYPE } from '../../utils/propTypes'

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
  as: COMPONENT_TYPE,
  children: node,
  disabled: bool,
  shape: SHAPES_TYPE,
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
