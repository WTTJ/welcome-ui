import { Checkbox } from '@ariakit/react'
import { forwardRef } from 'react'

import { useField } from '@/components/Field'
import { classNames } from '@/utils'

import toggleStyles from './toggle.module.scss'
import type { ToggleProps } from './types'

const cx = classNames(toggleStyles)

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    { checked, checkedIcon, className, disabled, onClick, size = 'xs', uncheckedIcon, ...rest },
    ref
  ) => {
    const { getInputProps } = useField()

    const hasIcon = checkedIcon && uncheckedIcon

    return (
      <div className={cx('wrapper')} onClick={onClick}>
        {hasIcon ? (
          <div
            className={cx('icon-wrapper', `size-${size}`, checked && `checked`)}
            onClick={onClick}
          >
            {checked ? checkedIcon : uncheckedIcon}
          </div>
        ) : null}

        <Checkbox
          checked={checked}
          className={cx('root', `size-${size}`, className)}
          disabled={disabled}
          ref={ref}
          {...getInputProps(rest)}
        />
      </div>
    )
  }
)
