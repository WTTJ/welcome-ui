import React, { forwardRef } from 'react'
import { bool, node, oneOf } from 'prop-types'

import { COMPONENT_TYPE, SHAPES_TYPE } from '../../utils'

import * as S from './styles'

export const Button = forwardRef(
  // eslint-disable-next-line react/prop-types
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
