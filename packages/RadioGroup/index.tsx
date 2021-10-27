import React, { forwardRef } from 'react'
import {
  RadioGroup as ReakitRadioGroup,
  RadioGroupOptions as ReakitRadioGroupOptions,
  useRadioState,
} from 'reakit/Radio'
import { FieldGroup, FieldGroupOptions } from '@welcome-ui/field-group'
import { Radio } from '@welcome-ui/radio'
import { CreateWuiProps } from '@welcome-ui/system'

import * as S from './styles'

export interface RadioGroupOptions {
  name?: string
  options?: {
    label: string | number
    value: string | number
    hint?: string
  }[]
  renderOption?: React.ElementType
  value?: string
}

export type RadioGroupProps = CreateWuiProps<
  typeof FieldGroup,
  FieldGroupOptions & ReakitRadioGroupOptions & RadioGroupOptions
>

export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
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

RadioGroup.displayName = 'RadioGroup'
