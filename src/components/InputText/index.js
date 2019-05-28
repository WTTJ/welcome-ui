import React from 'react'
import { bool, func, oneOf, string } from 'prop-types'

import { StyledInputText } from './styles'

export const InputText = ({
  disabled,
  name,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  variant,
  value,
  type = 'text'
}) => {
  return (
    <StyledInputText
      disabled={disabled}
      id={name}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      type={type}
      value={value}
      variant={variant}
    />
  )
}

InputText.propTypes = {
  disabled: bool,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  placeholder: string,
  type: string,
  value: string,
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
