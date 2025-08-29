import { Button as AriakitButton } from '@ariakit/react'

import { classNames } from '../../classNames'

import buttonStyles from './button.module.css'
import type { ButtonProps } from './types'

const cx = classNames(buttonStyles)

export const ButtonNoTailwind = <T extends React.ElementType = 'button'>({
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
  const overrides = className.split(' ')

  return (
    <AriakitButton
      {...rest}
      accessibleWhenDisabled={accessibleWhenDisabled}
      className={cx('root', `variant-${variant}`, `shape-${shape}`, `size-${size}`, ...overrides)}
      disabled={disabled}
      ref={ref}
      type="button"
    >
      {children}
    </AriakitButton>
  )
}

ButtonNoTailwind.displayName = 'ButtonNoTailwind'
