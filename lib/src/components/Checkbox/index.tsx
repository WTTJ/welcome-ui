// Checkbox component using Ariakit for accessibility and custom styles
// https://ariakit.org/examples/checkbox-custom
import { Checkbox as AriaKitCheckbox } from '@ariakit/react'
import React, { forwardRef, useState } from 'react'

import { useField } from '@/components/Field'
import { VisuallyHidden } from '@/components/VisuallyHidden'
import { classNames } from '@/utils'

import { Icon } from '../Icon'

import checkboxStyles from './checkbox.module.scss'
import type { CheckboxProps } from './types'

const cx = classNames(checkboxStyles)

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked = false, className, indeterminate = false, onChange, variant, ...rest }, ref) => {
    const [isChecked, setIsChecked] = useState(checked)
    const [focusVisible, setFocusVisible] = useState(false)
    const { getInputProps, variant: fieldVariant } = useField()

    const _variant = fieldVariant || variant
    const { disabled } = getInputProps(rest)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked)

      if (onChange) {
        onChange(e)
      }
    }

    return (
      <div
        aria-checked={isChecked}
        aria-disabled={disabled}
        className={cx(
          'root',
          _variant && `variant-${_variant}`,
          indeterminate && 'indeterminate',
          className
        )}
        data-focus-visible={focusVisible || undefined}
        onClick={disabled ? undefined : () => setIsChecked(!isChecked)}
      >
        <VisuallyHidden>
          <AriaKitCheckbox
            {...getInputProps(rest)}
            checked={isChecked}
            onBlur={() => setFocusVisible(false)}
            onChange={handleChange}
            onFocusVisible={() => setFocusVisible(true)}
            ref={ref}
          />
        </VisuallyHidden>
        {isChecked ? <Icon name="check" size="sm" /> : null}
        {!isChecked && indeterminate ? <Icon name="minus" size="sm" /> : null}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
