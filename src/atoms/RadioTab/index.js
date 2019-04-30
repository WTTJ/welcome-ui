import React, { PureComponent } from 'react'

import { RadioTabWrapper, RadioTab as StyledRadioTab, RadioTabLabel } from './styles'

export class RadioTab extends PureComponent {
  render() {
    const { checked, id, label, name } = this.props
    return (
      <RadioTabWrapper>
        <StyledRadioTab defaultChecked={checked} type="radio" id={id} name={name} value={id} />
        <RadioTabLabel htmlFor={id}>{label}</RadioTabLabel>
      </RadioTabWrapper>
    )
  }
}
