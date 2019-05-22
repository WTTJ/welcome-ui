import React from 'react'
import { func, node, oneOf, string } from 'prop-types'

import { StyledButton } from './styles'

export const Button = ({ radius, children, size = 'auto', span, variant = 'primary', onClick }) => {
  return (
    <StyledButton onClick={onClick} radius={radius} size={size} span={span} variant={variant}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: node,
  onClick: func,
  radius: string,
  size: oneOf(['auto', 'sm', 'md', 'lg']),
  span: oneOf(['full', 'half']),
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
