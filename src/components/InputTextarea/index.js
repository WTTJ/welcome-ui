import React from 'react'
import PropTypes from 'prop-types'

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
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  minRows: PropTypes.number,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.oneOf(['error', 'info', 'valid', 'warning'])
}
