import React from 'react'
import PropTypes from 'prop-types'

import { StyledInputText } from './styles'

export const InputText = ({
  autoFocus,
  disabled,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
  type = 'text',
  value,
  variant
}) => {
  return (
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
      type={type}
      value={value}
      variant={variant}
    />
  )
}

InputText.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['error', 'info', 'valid', 'warning'])
}
