import React from 'react'
import { oneOf, string } from 'prop-types'

import { StyledButton } from './styles'

export const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

Button.propTypes = {
  /** To set the button size */
  variant: oneOf([
    'primary',
    'secondary',
    'tertiary',
    'disabled',
    'primary-warning',
    'secondary-warning',
    'primary-danger',
    'secondary-danger'
  ]),
  /** To set the button size */
  size: oneOf(['auto', 'sm', 'md', 'lg']),
  /** To set the button width */
  span: oneOf(['full', 'half']),
  /** To set a rounded button */
  radius: string
}

// Specifies the default values for props:
Button.defaultProps = {
  variant: 'primary',
  size: 'auto'
}
