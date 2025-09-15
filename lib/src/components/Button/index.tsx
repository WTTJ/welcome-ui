import { Button as AriakitButton } from '@ariakit/react'

import { classNames } from '../../utils/classNames'

import buttonStyles from './button.module.scss'
import type { ButtonProps } from './types'

const cx = classNames(buttonStyles)

export const Button = <T extends React.ElementType = 'button'>({
  accessibleWhenDisabled = true,
  children,
  className = '',
  disabled = false,
  isLoading = false,
  ref,
  shape = 'default',
  size = 'md',
  variant = 'primary',
  ...rest
}: ButtonProps<T>) => {
  const isDisabled = disabled || isLoading
  // some variants like 'disabled' preprend over the others
  const activeVariant = (isDisabled && 'disabled') || variant

  return (
    <AriakitButton
      {...rest}
      accessibleWhenDisabled={accessibleWhenDisabled}
      className={cx(
        'root',
        variant && `variant-${activeVariant}`,
        shape && `shape-${shape}`,
        size && `size-${size}`,
        className
      )}
      disabled={isDisabled}
      ref={ref}
      type="button"
    >
      {isLoading ? <span className={cx('loader')} /> : null}
      {!isLoading && children}
    </AriakitButton>
  )
}
