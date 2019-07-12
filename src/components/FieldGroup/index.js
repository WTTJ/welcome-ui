import React, { forwardRef } from 'react'
import { node, string } from 'prop-types'

import { Label } from '../Label'

import * as S from './styles'

export const FieldGroup = forwardRef(({ children, label }, ref) => (
  <S.FieldGroup ref={ref}>
    <Label as="legend">{label}</Label>
    {children}
  </S.FieldGroup>
))

FieldGroup.displayName = 'FieldGroup'
FieldGroup.propTypes = {
  children: node,
  label: string
}
