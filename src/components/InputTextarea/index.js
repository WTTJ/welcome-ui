import React from 'react'
import { bool, node, number, oneOf, string } from 'prop-types'

import { StyledTextarea } from './styles.js'

export const InputTextarea = props => {
  const { minRows = 5, disabled, maxLength, placeholder, variant, autoFocus } = props

  return (
    <StyledTextarea
      autoFocus={autoFocus}
      disabled={disabled}
      maxLength={maxLength}
      minRows={minRows}
      placeholder={placeholder}
      variant={variant}
    />
  )
}

InputTextarea.propTypes = {
  autoFocus: bool,
  disabled: bool,
  maxLength: number,
  minRows: number,
  placeholder: string,
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}

InputTextarea.defaultProps = {
  minRows: 5
}
