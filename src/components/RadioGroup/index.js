import React, { cloneElement } from 'react'
import { bool, node, string } from 'prop-types'

import { DIRECTIONS_TYPE } from '../../utils/propTypes'
import { StyledFieldGroup } from '../FieldGroup/styles'
import { Label } from '../Label'

import * as S from './styles'

export const RadioGroup = ({ children, flexDirection, label, required }) => (
  <StyledFieldGroup>
    {label && (
      <Label as="legend" required={required}>
        {label}
      </Label>
    )}
    <S.Radios flexDirection={flexDirection}>
      {children.map(child => cloneElement(child, { key: child.props.value, flexDirection }))}
    </S.Radios>
  </StyledFieldGroup>
)

RadioGroup.propTypes = {
  children: node,
  flexDirection: DIRECTIONS_TYPE,
  label: string,
  required: bool
}
