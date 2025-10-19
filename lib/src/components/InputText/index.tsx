import React, { forwardRef } from 'react'

import { CloseButton } from '@/components/CloseButton'
import { useField } from '@/components/Field'
import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import inputTextStyles from './input-text.module.scss'
import type { InputTextProps, Size } from './types'

const cx = classNames(inputTextStyles)

const FIELD_ICON_SIZE: { [key in Size]: string } = { lg: 'md', md: 'md', sm: 'sm' }

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      children,
      className,
      icon,
      iconPlacement = 'left',
      isClearable,
      name,
      onChange,
      size = 'lg',
      transparent,
      type = 'text',
      value,
      variant,
      ...rest
    },
    ref
  ) => {
    const { getInputProps, variant: fieldVariant } = useField()

    const _variant = fieldVariant || variant

    const hasIcon = icon && iconPlacement
    const hasRightIcon = hasIcon && iconPlacement === 'right'
    const hasLeftIcon = hasIcon && iconPlacement === 'left'
    const iconSize = FIELD_ICON_SIZE[size]
    const inputProps = getInputProps(rest)
    const hasChildren = Boolean(children)
    const shouldShowRightElement = isClearable || hasRightIcon || hasChildren

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
          {...inputProps}
          className={cx(
            'root',
            `size-${size}`,
            _variant && `variant-${_variant}`,
            transparent && 'transparent',
            hasIcon && `placement-${iconPlacement}`,
            className
          )}
          name={name}
          onChange={onChange}
          ref={ref}
          type={type}
          value={value}
        />

        {hasLeftIcon ? (
          <div
            className={cx(
              'icon-wrapper',
              `icon-placement-left-${iconSize}`,
              inputProps.disabled && 'disabled'
            )}
          >
            <Icon {...icon.props} name={icon.props.name} size={iconSize} />
          </div>
        ) : null}

        {shouldShowRightElement ? (
          <div
            className={cx(
              'icon-wrapper',
              `icon-placement-right-${iconSize}`,
              inputProps.disabled && 'disabled'
            )}
          >
            {isClearable && value ? <CloseButton onClick={handleReset} size="sm" /> : null}
            {hasRightIcon && !hasChildren ? (
              <Icon {...icon.props} name={icon.props.name} size={iconSize} />
            ) : null}
            {hasChildren ? children : null}
          </div>
        ) : null}
      </div>
    )
  }
)
