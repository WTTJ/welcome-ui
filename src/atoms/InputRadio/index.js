import React, { PureComponent } from 'react'

import { InputRadioWrapper, InputRadio as StyledInputRadio, InputRadioLabel } from './styles'

export class InputRadio extends PureComponent {
  render() {
    const { name, radio } = this.props
    return (
      <InputRadioWrapper>
        <StyledInputRadio type="radio" id={radio.id} name={name} value={radio.id} />
        <InputRadioLabel htmlFor={radio.id}>{radio.label}</InputRadioLabel>
      </InputRadioWrapper>
    )
  }
}

export default InputRadio
