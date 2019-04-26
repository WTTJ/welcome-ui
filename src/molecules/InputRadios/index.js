import React, { PureComponent } from 'react'

import InputRadio from '../../atoms/InputRadio/index'

import { InputRadios as StyledInputRadios } from './styles'

export class InputRadios extends PureComponent {
  render() {
    const { checked, name, onChange, options } = this.props

    return (
      <StyledInputRadios>
        {options.map((radio, i) => (
          <InputRadio
            checked={checked === radio.id}
            id={radio.id}
            label={radio.label}
            name={name}
            key={radio.id}
            onClick={onChange}
          />
        ))}
      </StyledInputRadios>
    )
  }
}

export default InputRadios
