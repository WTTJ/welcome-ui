import React from 'react'
import PropTypes from 'prop-types'

import { IconButton } from '../IconButton'

import * as S from './styles'

const Button = ({ children, size = 'md', variant = 'primary', disabled, ...props }) => {
  return (
    <S.Button
      data-testid="button"
      disabled={disabled}
      size={size}
      variant={disabled ? 'disabled' : variant}
      {...props}
    >
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  /** To set the button size */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** To set a rounded button */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'primary-warning',
    'secondary-warning',
    'primary-danger',
    'secondary-danger'
  ])
}

export { Button, IconButton }
