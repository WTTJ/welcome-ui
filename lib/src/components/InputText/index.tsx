import React, { forwardRef } from 'react'

import { classNames } from '@/utils'
// @WUI-214 - replace old CleanButton component when it will be updated
import { ClearButton } from '@old/ClearButton'

import inputTextStyles from './input-text.module.scss'
import type { InputTextProps, Size } from './types'

const cx = classNames(inputTextStyles)

const FIELD_ICON_SIZE: { [key in Size]: string } = { lg: 'sm', md: 'sm', sm: 'sm', xs: 'xs' }

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      className,
      icon,
      iconPlacement = 'left',
      isClearable,
      name,
      onChange,
      size = 'md',
      transparent,
      type = 'text',
      value,
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    const hasIcon = icon && iconPlacement
    const hasRightIcon = hasIcon && iconPlacement === 'right'
    const hasLeftIcon = hasIcon && iconPlacement === 'left'
    const iconSize = FIELD_ICON_SIZE[size]

    const handleReset = () => {
      const event = {
        preventDefault: () => null,
        target: { name, value: '' },
      } as React.ChangeEvent<HTMLInputElement>
      if (onChange) onChange(event)
    }

    return (
      <div className={cx('input-text-wrapper')}>
        <input
          {...rest}
          className={cx(
            'root',
            `variant-${variant}`,
            `size-${size}`,
            transparent && 'transparent',
            hasIcon && `placement-${iconPlacement}`,
            className
          )}
          id={name}
          name={name}
          onChange={onChange}
          ref={ref}
          type={type}
          value={value}
        />

        {hasLeftIcon ? (
          <div className={cx('icon-wrapper', `icon-placement-left-${iconSize}`)}>
            {React.cloneElement(icon, { ...icon.props, size: iconSize })}
          </div>
        ) : null}

        {isClearable || hasRightIcon ? (
          <div className={cx('icon-wrapper', `icon-placement-right-${iconSize}`)}>
            {isClearable && value ? <ClearButton onClick={handleReset} /> : null}
            {hasRightIcon ? React.cloneElement(icon, { ...icon.props, size: iconSize }) : null}
          </div>
        ) : null}
      </div>
    )
  }
)
