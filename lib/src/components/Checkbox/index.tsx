import { Checkbox as AriaKitCheckbox } from '@ariakit/react'
import React, { forwardRef } from 'react'

import { useField } from '@/components/Field'
import { classNames } from '@/utils'

import checkboxStyles from './checkbox.module.scss'
import type { CheckboxProps } from './types'

const cx = classNames(checkboxStyles)

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked = false, className, indeterminate = false, onChange, variant, ...rest }, ref) => {
    const { getInputProps, variant: fieldVariant } = useField()

    const _variant = fieldVariant || variant

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.checked = !e.target.checked
      if (onChange) onChange(e)
    }

    return (
      <AriaKitCheckbox
        {...getInputProps(rest)}
        checked={checked}
        className={cx(
          'root',
          _variant && `variant-${_variant}`,
          indeterminate && 'indeterminate',
          className
        )}
        onChange={handleChange}
        ref={ref}
      />
    )
  }
)
