import React from 'react'
import { bool, func, number, oneOf, string } from 'prop-types'

import { StyledTextarea } from './styles.js'

export const InputTextarea = ({
  minRows = 5,
  disabled,
  maxLength,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  value,
  variant,
  autoFocus
}) => (
  <StyledTextarea
    autoFocus={autoFocus}
    disabled={disabled}
    maxLength={maxLength}
    minRows={minRows}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    onFocus={onFocus}
    placeholder={placeholder}
    value={value}
    variant={variant}
  />
)

InputTextarea.propTypes = {
  autoFocus: bool,
  disabled: bool,
  maxLength: number,
  minRows: number,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  placeholder: string,
  value: string,
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
