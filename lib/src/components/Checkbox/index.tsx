// Checkbox component using Ariakit for accessibility and custom styles
// https://ariakit.org/examples/checkbox-custom
import { Checkbox as AriaKitCheckbox } from '@ariakit/react'
import { forwardRef, useState } from 'react'

import { useField } from '@/components/Field'
import { VisuallyHidden } from '@/components/VisuallyHidden'
import { classNames } from '@/utils'

import { Icon } from '../Icon'

import checkboxStyles from './checkbox.module.scss'
import type { CheckboxProps } from './types'

export { checkboxStyles as checkboxClasses }

const cx = classNames(checkboxStyles)

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked = false, className, indeterminate = false, onChange, variant, ...rest }, ref) => {
    const [focusVisible, setFocusVisible] = useState(false)
    const { getInputProps, variant: fieldVariant } = useField()

    const _variant = fieldVariant || variant
    const { disabled } = getInputProps(rest)

    const handleChange = () => {
      if (onChange) {
        onChange(!checked)
      }
    }

    return (
      <div
        aria-checked={checked}
        aria-disabled={disabled}
        className={cx(
          'root',
          _variant && `variant-${_variant}`,
          indeterminate && 'indeterminate',
          'field-input',
          className
        )}
        data-focus-visible={focusVisible || undefined}
        onClick={disabled ? undefined : handleChange}
      >
        <VisuallyHidden>
          <AriaKitCheckbox
            {...getInputProps(rest)}
            checked={checked}
            onBlur={() => setFocusVisible(false)}
            onFocusVisible={() => setFocusVisible(true)}
            ref={ref}
          />
        </VisuallyHidden>
        {checked ? <Icon name="check" size="sm" /> : null}
        {!checked && indeterminate ? <Icon name="minus" size="sm" /> : null}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
