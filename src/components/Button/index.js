import React, { forwardRef } from 'react'
import { bool, node, oneOf } from 'prop-types'

import { COMPONENT_TYPE, SHAPES_TYPE } from '../../utils'

import * as S from './styles'

export const Button = forwardRef(
  ({ as, children, disabled, size = 'md', variant = 'primary', ...rest }, ref) => (
    <S.Button
      data-testid="button"
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
  as: COMPONENT_TYPE,
  children: node,
  disabled: bool,
  reverse: bool,
  shape: SHAPES_TYPE,
  size: oneOf(['xs', 'sm', 'md', 'lg']),
  variant: oneOf([
    'danger',
    'danger-reverse',
    'neutral',
    'neutral-reverse',
    'primary',
    'primary-reverse',
    'secondary',
    'secondary-reverse',
    'tertiary',
    'tertiary-reverse',
    'warning',
    'warning-reverse'
  ])
}
