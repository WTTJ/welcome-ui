import React from 'react'
import PropTypes from 'prop-types'

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
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['error', 'info', 'valid', 'warning'])
}
