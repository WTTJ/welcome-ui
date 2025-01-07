import React from 'react'
import * as Ariakit from '@ariakit/react'

import { FieldGroup, FieldGroupOptions } from '../FieldGroup'
import { Radio } from '../Radio'
import { CreateWuiProps, forwardRef } from '../System'

import * as S from './styles'

export type RadioGroupOption = {
  hint?: string
  label: string | number
  value: string | number
}

export interface RadioGroupOptions {
  name: string
  onChange?: (value: RadioGroupOption['value']) => void
  options: RadioGroupOption[]
  renderOption?: React.ElementType
  value?: string
}

export type RadioGroupProps = CreateWuiProps<
  'fieldset',
  Omit<FieldGroupOptions, 'children'> & RadioGroupOptions
>

export const RadioGroup = forwardRef<'fieldset', RadioGroupProps>(
  (
    {
      dataTestId,
      flexDirection,
      id,
      label,
      maxWidth,
      name,
      onChange,
      options = [],
      renderOption: Component = Radio,
      required,
      value,
      ...rest
    },
    ref
  ) => {
    const store = Ariakit.useRadioStore({ defaultValue: value })
    const activeValue = store.useState('value')

    const handleChange = (valueSelected: RadioGroupOption['value']) => {
      if (rest.disabled) return

      store.setValue(valueSelected)
      onChange?.(valueSelected)
    }

    return (
      <FieldGroup
        as={Ariakit.RadioGroup}
        dataTestId={dataTestId}
        label={label}
        mb={0}
        ref={ref}
        required={required}
        store={store}
      >
        <S.Radios flexDirection={flexDirection}>
          {options.map((option: RadioGroupOption) => (
            <Component
              checked={option.value === activeValue}
              dataTestId={dataTestId ? `${dataTestId}-${option.value}` : undefined}
              hint={option.hint}
              id={`${id || name}.${option.value}`}
              key={option.value}
              label={option.label}
              maxWidth={maxWidth}
              name={name}
              onChange={() => handleChange(option.value)}
              value={option.value}
              {...rest}
            />
          ))}
        </S.Radios>
      </FieldGroup>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
