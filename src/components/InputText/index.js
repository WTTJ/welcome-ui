import React from 'react'
import PropTypes from 'prop-types'

import { StyledInputText } from './styles'

export const InputText = ({ disabled, fieldProps, name, placeholder, variant, type }) => (
  <StyledInputText
    disabled={disabled}
    id={name}
    placeholder={placeholder}
    type={type}
    variant={variant}
    {...fieldProps}
  />
)

InputText.propTypes = {
  disabled: PropTypes.bool,
  fieldProps: PropTypes.object,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['error', 'info', 'valid', 'warning'])
}
