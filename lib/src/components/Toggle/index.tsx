import * as Ariakit from '@ariakit/react'

import { classNames } from '@/utils'

import toggleStyles from './toggle.module.scss'

const cx = classNames(toggleStyles)

import { forwardRef } from 'react'

import type { ToggleProps } from './types'

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    { checked, checkedIcon, className, disabled, onClick, size = 'xs', uncheckedIcon, ...rest },
    ref
  ) => {
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

        <Ariakit.Checkbox
          checked={checked}
          className={cx('root', size && `size-${size}`, className)}
          disabled={disabled}
          ref={ref}
          {...rest}
        />
      </div>
    )
  }
)

Toggle.displayName = 'Toggle'
