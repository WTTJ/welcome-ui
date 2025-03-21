import React from 'react'
import * as Ariakit from '@ariakit/react'

import * as S from './styles'

import { Label } from '@/Label'
import { FieldGroup, FieldGroupOptions } from '@/FieldGroup'
import { Box } from '@/Box'
import { CreateWuiProps, forwardRef } from '@/System'

export interface PickerOption {
  element: React.ComponentType<{ selected: boolean }>
  value: string
}

export interface PickerOptions {
  name?: string
  onChange?: React.MouseEventHandler<HTMLLabelElement>
  options?: PickerOption[]
  value?: string
}

export type PickerProps = CreateWuiProps<
  'fieldset',
  Omit<FieldGroupOptions, 'children'> & PickerOptions
>

export const Picker = forwardRef<'fieldset', PickerProps>(
  ({ dataTestId, label, name, onChange, options, required, value, ...rest }, ref) => {
    const store = Ariakit.useRadioStore({ defaultValue: value })

    const handleClick: React.MouseEventHandler<HTMLLabelElement> = e => {
      e.stopPropagation()
      onChange && onChange(e)
    }

    return (
      <FieldGroup
        {...rest}
        as={Ariakit.RadioGroup}
        dataTestId={dataTestId}
        mb={0}
        ref={ref}
        required={required}
        store={store}
      >
        <Box display="flex" flexWrap="wrap">
          {options.map(({ element: Component, value: optValue }) => (
            <Label
              checkableField
              dataTestId={dataTestId && `${dataTestId}-item-${name}-${optValue}`}
              key={`${label}-${name}-${optValue}`}
              onClick={handleClick}
            >
              <S.Radio name={name} value={optValue} />
              <Component selected={value === optValue} />
            </Label>
          ))}
        </Box>
      </FieldGroup>
    )
  }
)

Picker.displayName = 'Picker'
