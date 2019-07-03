import React from 'react'
import { bool, func, oneOf, string } from 'prop-types'

import { StyledInputText } from './styles'

export const InputText = ({
  autoFocus,
  disabled,
  inputRef,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
  size = 'lg',
  type = 'text',
  value,
  variant
}) => (
  <StyledInputText
    autoFocus={autoFocus}
    disabled={disabled}
    id={name}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    onFocus={onFocus}
    onKeyDown={onKeyDown}
    placeholder={placeholder}
    ref={inputRef}
    size={size}
    type={type}
    value={value}
    variant={variant}
  />
)

InputText.propTypes = {
  autoFocus: bool,
  disabled: bool,
  inputRef: string,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  placeholder: string,
  size: oneOf(['sm', 'md', 'lg']),
  type: string,
  value: string,
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
