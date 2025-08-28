import { Button as AriakitButton } from '@ariakit/react'
import type { ButtonProps as AriakitButtonProps } from '@ariakit/react'
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

import type { PolymorphicProps } from '../../TailwindTheme/types'

import buttonStyles from './theme.module.css'
import { hydrateCSSVarsWith, shapes, sizes, theme, variants } from './tokens'
import type { Variant } from './tokens'

type ButtonProps<T extends React.ElementType> = AriakitButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  PolymorphicProps<T> & {
    children?: ReactNode
    className?: string
    ref?: React.Ref<HTMLButtonElement>
    shape?: 'circle' | 'default' | 'square'
    size?: 'lg' | 'md' | 'sm' | 'xs'
    style?: CSSProperties
    variant?: Variant
  }

export const Button = <T extends React.ElementType = 'button'>({
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
}: ButtonProps<T>) => {
  const classNames = `${buttonStyles.wuiButtonBaseClass} ${buttonStyles.wuiButtonDynamicClass} ${className}`

  // some variants like 'disabled' preprend over the others
  const activeVariant = (disabled && 'disabled') || variant

  const styles = {
    ...hydrateCSSVarsWith(theme),
    ...hydrateCSSVarsWith(variants[activeVariant as keyof typeof variants]),
    ...hydrateCSSVarsWith(sizes[size as keyof typeof sizes]),
    ...hydrateCSSVarsWith(shapes[shape as keyof typeof shapes]),
    ...hydrateCSSVarsWith(shapes[`${shape}-${size}` as keyof typeof shapes]), // compouned shapes with sizes
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
