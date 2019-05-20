import React from 'react'
import { node, oneOf, string } from 'prop-types'

import { StyledBadge } from './styles'

export const Badge = props => {
  const { children } = props

  return (
    <StyledBadge length={children.length} {...props}>
      {children}
    </StyledBadge>
  )
}

Badge.propTypes = {
  children: node,
  /** Variant of component */
  fontsize: string,
  /** size of badge (height and min-width) */
  padding: string,
  /** font size of badge text */
  radius: string,
  /** custom padding */
  size: string,
  /** custom radius */
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}

// Specifies the default values for props:
Badge.defaultProps = {
  padding: 'sm',
  size: '2em',
  variant: 'info'
}
