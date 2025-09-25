import { Checkbox as AriaKitCheckbox } from '@ariakit/react'
import React, { forwardRef } from 'react'

import { classNames } from '@/utils'

import checkboxStyles from './checkbox.module.scss'
import type { CheckboxProps } from './types'

const cx = classNames(checkboxStyles)

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { checked = false, className, indeterminate = false, name, onChange, variant, ...rest },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.checked = !e.target.checked
      if (onChange) onChange(e)
    }

    return (
      <AriaKitCheckbox
        checked={checked}
        className={cx(
          'root',
          variant && `variant-${variant}`,
          indeterminate && 'indeterminate',
          className
        )}
        id={name}
        name={name}
        onChange={handleChange}
        ref={ref}
        {...rest}
      />
    )
  }
)
