import { Button as AriakitButton } from '@ariakit/react'

import { useButtonGroup } from '@/components/ButtonGroup'
import { Loader } from '@/components/Loader'
import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import buttonStyles from './button.module.scss'
import type { ButtonProps } from './types'

const cx = classNames(buttonStyles)

export const Button = forwardRefWithAs<ButtonProps, 'button'>(
  (
    {
      accessibleWhenDisabled = true,
      as,
      children,
      className = '',
      disabled = false,
      isLoading = false,
      size: propSize = 'lg',
      variant: propVariant = 'primary',
      ...rest
    },
    ref
  ) => {
    const { disabled: groupDisabled, size: groupSize, variant: groupVariant } = useButtonGroup()

    const isDisabled = groupDisabled || disabled || isLoading

    const variant = groupVariant || propVariant

    const size = groupSize || propSize

    const Element = as || 'button'

    return (
      <AriakitButton
        {...(Element === 'button' ? { type: 'button' } : {})}
        {...rest}
        accessibleWhenDisabled={accessibleWhenDisabled}
        className={cx('root', variant && `variant-${variant}`, size && `size-${size}`, className)}
        disabled={isDisabled}
        ref={ref}
        render={as ? <Element /> : undefined}
      >
        {isLoading ? (
          <>
            <div className={cx('loader')}>
              <Loader size="xs" />
            </div>
            {/* This is important to have a consistent button width with isLoading true/false */}
            <div className={cx('loader-children')}>{children}</div>
          </>
        ) : null}
        {!isLoading && children}
      </AriakitButton>
    )
  }
)
