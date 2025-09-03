import { Button as AriakitButton } from '@ariakit/react'

import { classNames } from '../../classNames'

import buttonStyles from './button.module.css'
import type { ButtonProps } from './types'

const cx = classNames(buttonStyles)

export const ButtonPureCss = <T extends React.ElementType = 'button'>({
  accessibleWhenDisabled = true,
  children,
  className = '',
  disabled = false,
  ref,
  shape = 'default',
  size = 'md',
  variant = 'primary',
  ...rest
}: ButtonProps<T>) => {
  return (
    <AriakitButton
      {...rest}
      accessibleWhenDisabled={accessibleWhenDisabled}
      className={cx('root', `variant-${variant}`, `shape-${shape}`, `size-${size}`, className)}
      disabled={disabled}
      ref={ref}
      type="button"
    >
      {children}
    </AriakitButton>
  )
}

ButtonPureCss.displayName = 'ButtonPureCss'
