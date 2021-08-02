import React, { forwardRef } from 'react'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

export interface CheckboxOptions {
  checked?: boolean
  Component?: React.ElementType
  disabled?: boolean
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type CheckboxProps = CheckboxOptions & React.HTMLAttributes<HTMLInputElement> & WuiProps

const CheckboxComponent = forwardRef<HTMLInputElement, CheckboxProps>(
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

CheckboxComponent.displayName = 'Checkbox'

export const Checkbox = Object.assign(CheckboxComponent, {
  type: 'Checkbox'
})
