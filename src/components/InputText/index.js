import React from 'react'

import { StyledInputText } from './styles'

export const InputText = props => {
  const { disabled, fieldTypeProps, name, placeholder, variant, type } = props
  return (
    <StyledInputText
      disabled={disabled}
      id={name}
      placeholder={placeholder}
      type={type}
      variant={variant}
      {...fieldTypeProps}
    />
  )
}
