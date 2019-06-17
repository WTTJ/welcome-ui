import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'

import { StyledFieldGroup } from '../FieldGroup/styles'
import { Label } from '../Label'

import { StyledRadios } from './styles'

export const RadioGroup = ({ children, flexDirection, label, required }) => (
  <StyledFieldGroup>
    {label && (
      <Label as="legend" required={required}>
        {label}
      </Label>
    )}
    <StyledRadios flexDirection={flexDirection}>
      {children.map(child => cloneElement(child, { key: child.props.value, flexDirection }))}
    </StyledRadios>
  </StyledFieldGroup>
)

RadioGroup.propTypes = {
  children: PropTypes.node,
  flexDirection: PropTypes.oneOf(['column', 'row']),
  label: PropTypes.string,
  required: PropTypes.bool
}
