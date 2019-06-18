import React, { forwardRef } from 'react'
import { node, string } from 'prop-types'

import { Label } from '../Label'

import { StyledFieldGroup } from './styles'

export const FieldGroup = forwardRef(({ children, label }, ref) => (
  <StyledFieldGroup ref={ref}>
    <Label as="legend">{label}</Label>
    {children}
  </StyledFieldGroup>
))

FieldGroup.displayName = 'FieldGroup'
FieldGroup.propTypes = {
  children: node,
  label: string
}
