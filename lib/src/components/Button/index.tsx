import { Button as AriakitButton } from '@ariakit/react'

import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { useButtonGroup } from '../ButtonGroup'

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
      shape = 'default',
      size: propSize = 'md',
      variant: propVariant = 'primary',
      ...rest
    },
    ref
  ) => {
    const { disabled: groupDisabled, size: groupSize, variant: groupVariant } = useButtonGroup()

    const isDisabled = groupDisabled || disabled || isLoading
    // some variants like 'disabled' preprend over the others
    const variant = (isDisabled && 'disabled') || groupVariant || propVariant

    const size = groupSize || propSize

    const Element = as || 'button'

    return (
      <AriakitButton
        accessibleWhenDisabled={accessibleWhenDisabled}
        className={cx(
          'root',
          variant && `variant-${variant}`,
          shape && `shape-${shape}`,
          size && `size-${size}`,
          className
        )}
        disabled={isDisabled}
        ref={ref}
        render={as ? <Element /> : undefined}
        type="button"
        {...rest}
      >
        {isLoading ? <span className={cx('loader')} /> : null}
        {!isLoading && children}
      </AriakitButton>
    )
  }
)
