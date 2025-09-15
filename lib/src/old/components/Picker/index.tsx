import * as Ariakit from '@ariakit/react'
import React from 'react'

import { Box } from '@old/Box'
import type { FieldGroupOptions } from '@old/FieldGroup'
import { FieldGroup } from '@old/FieldGroup'
import { Label } from '@old/Label'
import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'

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
              dataTestId={dataTestId ? `${dataTestId}-item-${name}-${optValue}` : null}
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
