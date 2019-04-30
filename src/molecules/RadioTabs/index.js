import React from 'react'

// atmoms
import { RadioTab } from '../../atoms/RadioTab/index'

import { RadioTabs as StyledRadioTabs } from './styles'

export const RadioTabs = props => {
  const { checked, name, onChange, options } = props
  return (
    <StyledRadioTabs>
      {options.map((radio, i) => (
        <RadioTab
          checked={checked === radio.id}
          id={radio.id}
          label={radio.label}
          name={name}
          key={radio.id}
          onClick={onChange}
        />
      ))}
    </StyledRadioTabs>
  )
}
