import React, { cloneElement } from 'react'
import { bool, node, string } from 'prop-types'

import { DIRECTIONS_TYPE } from '../../utils'
import { FieldGroup } from '../FieldGroup'

import * as S from './styles'

export const RadioGroup = ({ children, flexDirection, label, required }) => (
  <FieldGroup label={label} required={required}>
    <S.Radios flexDirection={flexDirection}>
      {children.map(child => cloneElement(child, { key: child.props.value, flexDirection }))}
    </S.Radios>
  </FieldGroup>
)

RadioGroup.propTypes = {
  children: node,
  flexDirection: DIRECTIONS_TYPE,
  label: string,
  required: bool
}
