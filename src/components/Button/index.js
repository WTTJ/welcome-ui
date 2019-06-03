import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export const Button = ({ children, size = 'auto', variant = 'primary', ...props }) => {
  return (
    <S.Button size={size} variant={variant} {...props}>
      {children}
    </S.Button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  /** To set the button size */
  size: PropTypes.oneOf(['auto', 'sm', 'md', 'lg']),
  /** To set a rounded button */
  variant: PropTypes.oneOf([
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
