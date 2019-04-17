import React, { PureComponent } from 'react'

import StyledInputText from './styles'

export class InputText extends PureComponent {
  render() {
    const { disabled, fieldTypeProps, placeholder, variant, type } = this.props
    return (
      <StyledInputText
        disabled={disabled}
        {...fieldTypeProps}
        placeholder={placeholder}
        variant={variant}
        type={type}
      />
    )
  }
}

export default InputText
