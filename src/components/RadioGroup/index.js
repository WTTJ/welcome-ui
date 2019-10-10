import React from 'react'
import { arrayOf, bool, func, string } from 'prop-types'
import { RadioGroup as ReakitRadioGroup, useRadioState } from 'reakit/Radio'

import { DIRECTIONS_TYPE, OPTIONS_TYPE } from '../../utils/propTypes'
import { FieldGroup } from '../FieldGroup'
import { InputRadio } from '../InputRadio'

import * as S from './styles'

export const RadioGroup = ({
  flexDirection,
  label,
  name,
  onChange,
  options = [],
  required,
  value,
  ...rest
}) => {
  const radio = useRadioState({ currentId: value })
  const handleChange = e => {
    onChange && onChange(e.target.value, e)
  }

  return (
    <FieldGroup as={ReakitRadioGroup} label={label} required={required} {...rest}>
      <S.Radios flexDirection={flexDirection}>
        {options.map(option => (
          <InputRadio
            {...rest}
            checked={option.value === radio.state || option.value === radio.currentId}
            flexDirection={flexDirection}
            id={`${name}.${option.value}`}
            key={option.value}
            label={option.label}
            name={name}
            onChange={handleChange}
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
  flexDirection: DIRECTIONS_TYPE,
  label: string,
  name: string,
  onChange: func,
  options: arrayOf(OPTIONS_TYPE),
  required: bool,
  value: string
}
