import React from 'react'
import { bool, func, node, oneOf } from 'prop-types'

import * as S from './styles'

export const Link = ({ children, disabled, onClick, variant = 'primary', ...props }) => {
  const handleOnClick = () => {
    !disabled && onClick && onClick()
  }

  return (
    <S.Link disabled={disabled} onClick={handleOnClick} variant={variant} {...props}>
      {children}
    </S.Link>
  )
}

Link.propTypes = {
  children: node.isRequired,
  disabled: bool,
  onClick: func,
  variant: oneOf(['primary', 'primary-underline-span', 'secondary'])
}
