import React, { forwardRef } from 'react'
import { bool, node, oneOf, oneOfType } from 'prop-types'

import { COMPONENT_TYPE, SHAPES_TYPE } from '../Core/utils/propTypes'

import * as S from './styles'

export const Button = forwardRef(
  ({ as, children, dataTestId, disabled, size = 'md', variant = 'primary', ...rest }, ref) => (
    <S.Button
      data-testid={dataTestId}
      disabled={disabled}
      forwardedAs={as}
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
  as: oneOfType(COMPONENT_TYPE),
  children: node.isRequired,
  disabled: bool,
  shape: oneOf(SHAPES_TYPE),
  size: oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  variant: oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'primary-warning',
    'secondary-warning',
    'primary-danger',
    'secondary-danger'
  ])
}

export default Button

export const StyledButton = S.Button
