import React from 'react'
import PropTypes from 'prop-types'

import { StyledTextarea } from './styles.js'

export const InputTextarea = props => {
  const { minRows = 5, disabled, maxLength, placeholder, variant, autoFocus } = props

  return (
    <StyledTextarea
      minRows={minRows}
      placeholder={placeholder}
      disabled={disabled}
      maxLength={maxLength}
      autoFocus={autoFocus}
      variant={variant}
    />
  )
}

InputTextarea.propTypes = {
  minRows: PropTypes.number,
  attachments: PropTypes.node,
  throttleOnChange: PropTypes.bool
}

InputTextarea.defaultProps = {
  minRows: 5,
  throttleOnChange: true
}
