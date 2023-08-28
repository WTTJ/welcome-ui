import React from 'react'
import * as Ariakit from '@ariakit/react'
import { FieldGroup, FieldGroupOptions } from '@welcome-ui/field-group'
import { Radio } from '@welcome-ui/radio'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

export type Option = {
  label: string | number
  value: string | number
  hint?: string
}

export interface RadioGroupOptions {
  name: string
  options: Option[]
  renderOption?: React.ElementType
  value?: string
  onChange?: (value: Option['value']) => void
}

export type RadioGroupProps = CreateWuiProps<
  'fieldset',
  Omit<FieldGroupOptions, 'children'> & RadioGroupOptions
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
      dataTestId,
      onChange,
      value,
      id,
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

    const withHint = options.some((obj: Option) => 'hint' in obj)

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
              withHint={withHint}
              {...rest}
            />
          ))}
        </S.Radios>
      </FieldGroup>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
