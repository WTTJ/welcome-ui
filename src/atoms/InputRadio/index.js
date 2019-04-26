import React, { PureComponent } from 'react'

import { InputRadioWrapper, InputRadio as StyledInputRadio, InputRadioLabel } from './styles'

export class InputRadio extends PureComponent {
  render() {
    const { checked, id, label, name } = this.props
    return (
      <InputRadioWrapper>
        <StyledInputRadio defaultChecked={checked} type="radio" id={id} name={name} value={id} />
        <InputRadioLabel htmlFor={id}>{label}</InputRadioLabel>
      </InputRadioWrapper>
    )
  }
}

export default InputRadio
