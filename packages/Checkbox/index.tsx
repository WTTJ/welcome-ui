import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { DefaultFieldStylesProps } from '@welcome-ui/utils'

import * as S from './styles'

export type CheckboxOptions = {
  checked?: boolean
  Component?: React.ElementType
  disabled?: boolean
  name?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
} & DefaultFieldStylesProps

export type CheckboxProps = CreateWuiProps<'input', CheckboxOptions>

export const Checkbox = forwardRef<'input', CheckboxProps>(
  (
    { checked = false, Component = S.Checkbox, dataTestId, disabled, name, onChange, ...rest },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.checked = !e.target.checked
      onChange && onChange(e)
    }

    return (
      <Component
        checked={checked}
        data-testid={dataTestId}
        disabled={disabled}
        id={name}
        name={name}
        onChange={handleChange}
        ref={ref}
        {...rest}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'
