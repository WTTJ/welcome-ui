import React from 'react'
import {
  RadioGroup as ReakitRadioGroup,
  RadioGroupOptions as ReakitRadioGroupOptions,
  useRadioState,
} from 'reakit/Radio'
import { FieldGroup, FieldGroupOptions } from '@welcome-ui/field-group'
import { Radio } from '@welcome-ui/radio'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

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
  'fieldset',
  Omit<FieldGroupOptions, 'children'> & Partial<ReakitRadioGroupOptions> & RadioGroupOptions
>

export const RadioGroup = forwardRef<'fieldset', RadioGroupProps>(
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
    const withHint = options.findIndex(obj => Object.keys(obj).includes('hint')) !== -1

    return (
      <FieldGroup as={ReakitRadioGroup} label={label} mb={0} ref={ref} required={required}>
        <S.Radios flexDirection={flexDirection}>
          {options.map(option => (
            <Component
              {...rest}
              checked={option.value === value}
              hint={option.hint}
              id={`${name}.${option.value}`}
              key={option.value}
              label={option.label}
              maxWidth={maxWidth}
              name={name}
              type="radio"
              value={option.value}
              withHint={withHint}
              {...radio}
            />
          ))}
        </S.Radios>
      </FieldGroup>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
