import React from 'react'
import { node, oneOf, string } from 'prop-types'

import { StyledBadge } from './styles'

export const Badge = ({
  children,
  fontsize,
  padding = 'sm',
  radius,
  size = '2em',
  variant = 'info'
}) => {
  return (
    <StyledBadge
      fontsize={fontsize}
      length={children.length}
      padding={padding}
      radius={radius}
      size={size}
      variant={variant}
    >
      {children}
    </StyledBadge>
  )
}

Badge.propTypes = {
  children: node,
  fontsize: string,
  padding: string,
  radius: string,
  size: string,
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
