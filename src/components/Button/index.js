import React from 'react'
import { node, oneOf, string } from 'prop-types'

import { StyledButton } from './styles'

export const Button = ({ radius, children, size = 'auto', span, variant = 'primary' }) => {
  return (
    <StyledButton radius={radius} size={size} span={span} variant={variant}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: node,
  /** To set the button size */
  radius: string,
  /** To set the button size */
  size: oneOf(['auto', 'sm', 'md', 'lg']),
  /** To set the button width */
  span: oneOf(['full', 'half']),
  /** To set a rounded button */
  variant: oneOf([
    'primary',
    'secondary',
    'tertiary',
    'disabled',
    'primary-warning',
    'secondary-warning',
    'primary-danger',
    'secondary-danger'
  ])
}
