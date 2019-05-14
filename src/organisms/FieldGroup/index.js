import React from 'react'
import { string } from 'prop-types'

import StyledFieldGroup from './styles'

// molecules
import { Label } from '../../molecules/Label'

export const FieldGroup = ({ children, label }) => {
  return (
    <StyledFieldGroup>
      <Label as="legend">{label}</Label>
      {children}
    </StyledFieldGroup>
  )
}

FieldGroup.propTypes = {
  /** Label of FieldGroup */
  label: string
}
