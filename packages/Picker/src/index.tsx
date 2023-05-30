import React from 'react'
import { RadioGroup as ReakitRadioGroup } from 'reakit'
import { FieldGroup, FieldGroupOptions } from '@welcome-ui/field-group'
import { Label } from '@welcome-ui/label'
import { Box } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

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
    const handleClick: React.MouseEventHandler<HTMLLabelElement> = e => {
      e.stopPropagation()
      onChange && onChange(e)
    }

    return (
      <FieldGroup
        {...rest}
        as={ReakitRadioGroup}
        dataTestId={dataTestId}
        mb={0}
        ref={ref}
        required={required}
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
