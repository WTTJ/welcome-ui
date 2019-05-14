import React from 'react'
import { oneOf, string } from 'prop-types'

import StyledBadge from './styles'

export const Badge = props => {
  const { children } = props

  return (
    <StyledBadge length={children.length} {...props}>
      {children}
    </StyledBadge>
  )
}

Badge.propTypes = {
  /** Variant of component */
  variant: oneOf(['error', 'warning', 'valid']),
  /** size of badge (height and min-width) */
  size: string,
  /** font size of badge text */
  fontsize: string,
  /** custom padding */
  padding: string,
  /** custom radius */
  radius: string
}

// Specifies the default values for props:
Badge.defaultProps = {
  variant: 'info',
  size: '2em',
  padding: 'sm'
}

export default Badge
