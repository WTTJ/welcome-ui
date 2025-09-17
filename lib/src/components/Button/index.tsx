import { Button as AriakitButton } from '@ariakit/react'

import { classNames } from '@/utils'

import { useButtonGroup } from '../ButtonGroup'

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
  size: propSize = 'md',
  variant: propVariant = 'primary',
  ...rest
}: ButtonProps<T>) => {
  const { disabled: groupDisabled, size: groupSize, variant: groupVariant } = useButtonGroup()

  const isDisabled = groupDisabled || disabled || isLoading
  // some variants like 'disabled' preprend over the others
  const variant = (isDisabled && 'disabled') || groupVariant || propVariant

  const size = groupSize || propSize

  return (
    <AriakitButton
      {...rest}
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
      type="button"
    >
      {isLoading ? <span className={cx('loader')} /> : null}
      {!isLoading && children}
    </AriakitButton>
  )
}
