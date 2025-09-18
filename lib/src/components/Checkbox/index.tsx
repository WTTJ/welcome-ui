import * as Ariakit from '@ariakit/react'
import React, { forwardRef } from 'react'

import { classNames } from '@/utils'

import checkboxStyles from './checkbox.module.scss'
import type { CheckboxProps } from './types'

const cx = classNames(checkboxStyles)

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { checked = false, indeterminate = false, name, onChange, variant = 'default', ...rest },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target.checked = !e.target.checked
      if (onChange) onChange(e)
    }

    return (
      <Ariakit.Checkbox
        checked={checked}
        className={cx('root', `variant-${variant}`, indeterminate && 'indeterminate')}
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
