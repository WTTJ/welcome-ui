import { Button as AriakitButton } from '@ariakit/react'

import { classNames } from '../../classNames'

import buttonStyles from './button.module.scss'
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
  // some variants like 'disabled' preprend over the others
  const activeVariant = (disabled && 'disabled') || variant

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
      disabled={disabled}
      ref={ref}
      type="button"
    >
      {children}
    </AriakitButton>
  )
}

ButtonNoTailwind.displayName = 'ButtonNoTailwind'
