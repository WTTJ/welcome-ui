import React, { forwardRef } from 'react'
import { arrayOf, bool, elementType, number, oneOf, oneOfType, string } from 'prop-types'
import { RadioGroup as ReakitRadioGroup, useRadioState } from 'reakit/Radio'
import { FieldGroup } from '@welcome-ui/field-group'
import { Radio } from '@welcome-ui/radio'

import { DIRECTIONS_TYPE, OPTIONS_TYPE } from '../../src/utils/propTypes'

import * as S from './styles'

export const RadioGroup = forwardRef(
  (
    {
      flexDirection,
      maxWidth,
      label,
      name,
      options = [],
      renderOption: Component = Radio,
      required,
      value,
      ...rest
    },
    ref
  ) => {
    const radio = useRadioState({ currentId: value })

    return (
      <FieldGroup as={ReakitRadioGroup} label={label} mb={0} ref={ref} required={required}>
        <S.Radios flexDirection={flexDirection}>
          {options.map(option => (
            <Component
              {...rest}
              checked={option.value === value}
              flexDirection={flexDirection}
              hint={option.hint}
              id={`${name}.${option.value}`}
              key={option.value}
              label={option.label}
              maxWidth={maxWidth}
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
)

RadioGroup.type = 'RadioGroup'
RadioGroup.displayName = 'RadioGroup'

RadioGroup.propTypes /* remove-proptypes */ = {
  flexDirection: oneOf(DIRECTIONS_TYPE),
  label: string,
  maxWidth: oneOfType([number, string]),
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
