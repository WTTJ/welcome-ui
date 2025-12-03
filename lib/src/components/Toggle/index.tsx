import { Checkbox } from '@ariakit/react'
import { forwardRef } from 'react'

import { useField } from '@/components/Field'
import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import toggleStyles from './toggle.module.scss'
import type { ToggleProps } from './types'

const cx = classNames(toggleStyles)

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ checked, className, disabled, onClick, size = 'md', withVisibilityIcon, ...rest }, ref) => {
    const { getInputProps } = useField()

    const checkboxProps = getInputProps(rest)
    const handleClick = disabled ? null : onClick

    return (
      <div className={cx('wrapper', 'field-input')} onClick={handleClick}>
        {withVisibilityIcon ? (
          <div
            className={cx(
              'icon-wrapper',
              `size-${size}`,
              checked && `checked`,
              disabled && `disabled`
            )}
          >
            {checked ? <Icon name="eye" /> : <Icon name="eye-slash" />}
          </div>
        ) : null}
        <Checkbox
          checked={checked}
          className={cx('root', `size-${size}`, className)}
          disabled={disabled}
          ref={ref}
          {...checkboxProps}
        />
      </div>
    )
  }
)

Toggle.displayName = 'Toggle'
