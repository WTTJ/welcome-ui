import React from 'react'
import * as Ariakit from '@ariakit/react'
import { FieldGroup, FieldGroupOptions } from '@welcome-ui/field-group'
import { Radio } from '@welcome-ui/radio'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type Option = {
  hint?: string
  label: string | number
  value: string | number
}

export interface RadioGroupOptions {
  name: string
  onChange?: (value: Option['value']) => void
  options: Option[]
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

    const handleChange = (valueSelected: Option['value']) => {
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
          {options.map((option: Option) => (
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
