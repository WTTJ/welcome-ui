import React from 'react'
import { arrayOf, bool, elementType, oneOf, string } from 'prop-types'
import { RadioGroup as ReakitRadioGroup, useRadioState } from 'reakit/Radio'
import { FieldGroup } from '@welcome-ui/field-group'
import { Radio } from '@welcome-ui/radio'

import { DIRECTIONS_TYPE, OPTIONS_TYPE } from '../Core/utils/propTypes'

import * as S from './styles'

export const RadioGroup = ({
  flexDirection,
  label,
  name,
  options = [],
  renderOption: Component = Radio,
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
  /** [{
    label: `string` | `number`,
    value: `string` | `number`
  }] */
  options: arrayOf(OPTIONS_TYPE),
  renderOption: elementType,
  required: bool,
  value: string
}
