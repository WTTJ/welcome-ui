import React, { PureComponent } from 'react'

import InputRadio from '../../atoms/InputRadio/index'

import { InputRadios as StyledInputRadios } from './styles'

export class InputRadios extends PureComponent {
  render() {
    const { name, options } = this.props
    return (
      <StyledInputRadios>
        {options.map((radio, i) => (
          <InputRadio name={name} radio={radio} key={i} />
        ))}
      </StyledInputRadios>
    )
  }
}

export default InputRadios
