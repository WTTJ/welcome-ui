import React, { PureComponent } from 'react'
import { oneOf, string } from 'prop-types'

import StyledBadge from './styles'

export class Badge extends PureComponent {
  render() {
    const { children } = this.props
    return (
      <StyledBadge length={children.length} {...this.props}>
        {children}
      </StyledBadge>
    )
  }
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
  fontsize: '',
  padding: 'sm',
  radius: ''
}

export default Badge
