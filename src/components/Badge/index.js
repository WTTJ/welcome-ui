import React from 'react'
import { node, number, object, oneOf, oneOfType, string } from 'prop-types'

import { StyledBadge } from './styles'

export const Badge = ({ children, size = '2em', variant = 'info', ...props }) => {
  return (
    <StyledBadge length={children.length} size={size} variant={variant} {...props}>
      {children}
    </StyledBadge>
  )
}

Badge.propTypes = {
  children: node,
  size: string,
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
