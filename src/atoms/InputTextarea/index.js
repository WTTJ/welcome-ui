import React from 'react'
import PropTypes from 'prop-types'

import { formFieldPropTypes, formFieldDefaultProps } from '../../utils/propTypes'
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
  ...formFieldPropTypes,
  minRows: PropTypes.number,
  attachments: PropTypes.node,
  throttleOnChange: PropTypes.bool
}

InputTextarea.defaultProps = {
  ...formFieldDefaultProps,
  minRows: 5,
  throttleOnChange: true
}
