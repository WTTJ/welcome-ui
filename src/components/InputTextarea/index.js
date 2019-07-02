import React from 'react'
import { bool, func, node, number, oneOf, string } from 'prop-types'

import { StyledTextarea } from './styles.js'

export const InputTextarea = ({
  autoFocus,
  disabled,
  inputRef,
  maxLength,
  minRows = 5,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  placeholder,
  size = 'lg',
  value,
  variant
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
    onKeyDown={onKeyDown}
    placeholder={placeholder}
    ref={inputRef}
    size={size}
    value={value}
    variant={variant}
  />
)

InputTextarea.propTypes = {
  autoFocus: bool,
  disabled: bool,
  inputRef: node,
  maxLength: number,
  minRows: number,
  name: string,
  onBlur: func,
  onChange: func,
  onFocus: func,
  onKeyDown: func,
  placeholder: string,
  size: oneOf(['sm', 'md', 'lg']),
  value: string,
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
