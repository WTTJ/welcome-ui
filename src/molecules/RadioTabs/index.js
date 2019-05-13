import React from 'react'

// atoms
import { RadioTab } from '../../atoms/RadioTab/index'

import { RadioTabs as StyledRadioTabs } from './styles'

export const RadioTabs = ({ checked, name, onChange, options }) => (
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
