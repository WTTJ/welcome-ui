import React from 'react'
import { arrayOf, bool, elementType, oneOf, string } from 'prop-types'
import { RadioGroup as ReakitRadioGroup, useRadioState } from 'reakit/Radio'

import { DIRECTIONS_TYPE, OPTIONS_TYPE } from '../../utils/propTypes'
import { FieldGroup } from '../FieldGroup'
import { InputRadio } from '../InputRadio'

import * as S from './styles'

export const RadioGroup = ({
  flexDirection,
  label,
  name,
  options = [],
  renderOption: Component = InputRadio,
  required,
  value,
  ...rest
}) => {
  const radio = useRadioState({ currentId: value })

  return (
    <FieldGroup as={ReakitRadioGroup} label={label} mb={0} required={required}>
      <S.Radios flexDirection={flexDirection}>
        {options.map(option => (
          <Component
            {...rest}
            checked={option.value === value}
            flexDirection={flexDirection}
            id={`${name}.${option.value}`}
            key={option.value}
            label={option.label}
            name={name}
            type="radio"
            value={option.value}
            {...radio}
          />
        ))}
      </S.Radios>
    </FieldGroup>
  )
}

RadioGroup.type = 'RadioGroup'
RadioGroup.displayName = 'RadioGroup'

RadioGroup.propTypes = {
  flexDirection: oneOf(DIRECTIONS_TYPE),
  label: string,
  name: string,
  options: arrayOf(OPTIONS_TYPE),
  renderOption: elementType,
  required: bool,
  value: string
}
