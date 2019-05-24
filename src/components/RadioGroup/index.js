import React from 'react'
import { bool, node, oneOf, string } from 'prop-types'

import { StyledFieldGroup } from '../FieldGroup/styles'
import { Label } from '../Label'

import { StyledRadios } from './styles'

export const RadioGroup = ({ children, label, required, flexDirection }) => (
  <StyledFieldGroup>
    {label && (
      <Label as="legend" required={required}>
        {label}
      </Label>
    )}
    <StyledRadios flexDirection={flexDirection}>{children}</StyledRadios>
  </StyledFieldGroup>
)

RadioGroup.propTypes = {
  children: node,
  flexDirection: oneOf(['column', 'row']),
  label: string,
  required: bool
}
