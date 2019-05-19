import React from 'react'
import { bool, object, oneOf, string } from 'prop-types'

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
  disabled: bool,
  fieldProps: object,
  name: string,
  placeholder: string,
  type: string,
  variant: oneOf(['error', 'info', 'valid', 'warning'])
}
