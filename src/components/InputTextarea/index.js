import React from 'react'
import { bool, number, oneOf, string } from 'prop-types'

import { StyledTextarea } from './styles.js'

export const InputTextarea = ({
  minRows = 5,
  disabled,
  maxLength,
  placeholder,
  variant,
  autoFocus
}) => (
  <StyledTextarea
    autoFocus={autoFocus}
    disabled={disabled}
    maxLength={maxLength}
    minRows={minRows}
    placeholder={placeholder}
    variant={variant}
  />
)

InputTextarea.propTypes = {
  autoFocus: bool,
  disabled: bool,
  maxLength: number,
  minRows: number,
  placeholder: string,
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
