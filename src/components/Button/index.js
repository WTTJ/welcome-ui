import React from 'react'
import { node, object, oneOf, string } from 'prop-types'

import { StyledButton } from './styles'

export const Button = ({ children, size = 'auto', variant = 'primary', ...props }) => {
  return (
    <StyledButton size={size} variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: node,
  /** To set the button size */
  size: oneOf(['auto', 'sm', 'md', 'lg']),
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
