import React, { PureComponent } from 'react'

import StyledInputText from './styles'

export class InputText extends PureComponent {
  render() {
    const { disabled, fieldTypeProps, name, placeholder, variant, type } = this.props
    return (
      <StyledInputText
        disabled={disabled}
        id={name}
        placeholder={placeholder}
        type={type}
        variant={variant}
        {...fieldTypeProps}
      />
    )
  }
}

export default InputText
