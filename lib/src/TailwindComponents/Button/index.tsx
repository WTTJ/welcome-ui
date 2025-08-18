import { Button as AriakitButton } from '@ariakit/react'
import type { ButtonProps as AriakitButtonProps } from '@ariakit/react'
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

import buttonStyles from './theme.module.css'
import { shapes, sizes, theme, variableMap, variants } from './tokens'
import type { Variant } from './tokens'

type ButtonProps = AriakitButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode
    className?: string
    ref?: React.Ref<HTMLButtonElement>
    shape?: 'circle' | 'default' | 'square'
    size?: 'lg' | 'md' | 'sm' | 'xs'
    style?: CSSProperties
    variant?: Variant
  }

export const Button = ({
  accessibleWhenDisabled = true,
  children,
  className = '',
  disabled = false,
  ref,
  shape = 'default',
  size = 'md',
  style,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  const classNames = `${buttonStyles.wuiButtonBaseClass} ${buttonStyles.wuiButtonDynamicClass} ${className}`

  // some variants like 'disabled' preprend over the others
  const activeVariant = (disabled && 'disabled') || variant

  const styles = {
    ...variableMap(theme),
    ...variableMap(variants[activeVariant as keyof typeof variants]),
    ...variableMap(sizes[size as keyof typeof sizes]),
    ...variableMap(shapes[shape as keyof typeof shapes]),
    ...variableMap(shapes[`${shape}-${size}` as keyof typeof shapes]), // compouned shapes with sizes
    ...style,
  }

  return (
    <AriakitButton
      {...rest}
      accessibleWhenDisabled={accessibleWhenDisabled}
      className={classNames}
      disabled={disabled}
      ref={ref}
      style={styles as CSSProperties}
      type="button"
    >
      {children}
    </AriakitButton>
  )
}

Button.displayName = 'TailwindButton'
