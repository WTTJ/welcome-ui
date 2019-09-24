import React, { cloneElement } from 'react'
import { bool, node, string } from 'prop-types'
import { RadioGroup as ReakitRadioGroup, useRadioState } from 'reakit/Radio'

import { DIRECTIONS_TYPE } from '../../utils/propTypes'
import { FieldGroup } from '../FieldGroup'

import * as S from './styles'

export const RadioGroup = ({ children, flexDirection, label, required }) => {
  const radio = useRadioState()

  return (
    <FieldGroup as={ReakitRadioGroup} label={label} required={required}>
      <S.Radios flexDirection={flexDirection}>
        {children.map(child =>
          cloneElement(child, { key: child.props.value, flexDirection, radio: { ...radio } })
        )}
      </S.Radios>
    </FieldGroup>
  )
}

RadioGroup.propTypes = {
  children: node,
  flexDirection: DIRECTIONS_TYPE,
  label: string,
  required: bool
}
