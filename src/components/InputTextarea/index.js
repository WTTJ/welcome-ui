import React from 'react'
import PropTypes from 'prop-types'

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
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  minRows: PropTypes.number,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(['error', 'info', 'valid', 'warning'])
}
