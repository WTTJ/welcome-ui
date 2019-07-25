import React, { forwardRef } from 'react'
import { bool, node, string } from 'prop-types'

import { Label } from '../Label'

import * as S from './styles'

export const FieldGroup = forwardRef(({ children, label, required }, ref) => (
  <S.FieldGroup ref={ref}>
    <Label as="legend" required={required}>
      {label}
    </Label>
    {children}
  </S.FieldGroup>
))

FieldGroup.displayName = 'FieldGroup'
FieldGroup.propTypes = {
  children: node,
  label: string,
  required: bool
}
