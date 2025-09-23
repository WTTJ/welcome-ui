import React, { forwardRef } from 'react'

import { CloseButton } from '@/components/CloseButton'
import { classNames } from '@/utils'
import { IconGroupWrapper, IconWrapper } from '@old/Field'

import dateTimePickerCommonStyles from './date-time-picker-common.module.scss'
import type { CustomInputOptions, CustomInputProps } from './types'

const cx = classNames(dateTimePickerCommonStyles)

const FIELD_ICON_SIZE: {
  [key in CustomInputOptions['size']]: 'sm' | 'xs'
} = {
  lg: 'sm',
  md: 'sm',
  sm: 'sm',
  xs: 'xs',
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  (
    { focused, handleBlur, handleFocus, icon, iconPlacement, onReset, size, value, ...rest },
    ref
  ) => {
    const iconSize = FIELD_ICON_SIZE[size]
    // export const CustomInput = styled.div<{ $focused: Focused }>(
    //   ({ $focused }) => css`
    //     position: relative;

    //     ${IconGroupWrapper} {
    //       z-index: ${$focused ? 1 : null};
    //     }

    //     ${IconWrapper} {
    //       z-index: ${$focused ? 1 : null};
    //     }
    //   `
    // )
    return (
      <div
        className={cx('custom-input', focused && 'focused')}
        onBlur={handleBlur}
        onFocus={handleFocus}
      >
        <input value={value} {...rest} ref={ref} />
        {icon && iconPlacement !== 'right' ? (
          <IconWrapper
            className={cx('icon-wrapper', focused && 'focused')}
            iconPlacement={iconPlacement}
            size={iconSize}
          >
            {React.cloneElement(icon, { ...icon.props, size: iconSize })}
          </IconWrapper>
        ) : null}
        {value ? (
          <IconGroupWrapper
            className={cx('icon-group-wrapper', focused && 'focused')}
            size={iconSize}
          >
            <CloseButton animatePresence aria-label="clear date" onClick={onReset} />
            {iconPlacement === 'right' &&
              React.cloneElement(icon, { ...icon.props, size: iconSize })}
          </IconGroupWrapper>
        ) : null}
      </div>
    )
  }
)
