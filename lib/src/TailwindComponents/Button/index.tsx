import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

import buttonStyles from './theme.module.css'
import { shapes, sizes, theme, variableMap, variants } from './tokens'
import type { Variant } from './tokens'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  className?: string
  ref?: React.Ref<HTMLButtonElement>
  shape?: 'circle' | 'square'
  size?: 'lg' | 'md' | 'sm' | 'xs'
  style?: CSSProperties
  variant?: Variant
}

export const Button = ({
  children,
  className = '',
  ref,
  shape = 'square',
  size = 'md',
  style,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  const classNames = `${buttonStyles.wuiButtonBaseClass} ${buttonStyles.wuiButtonDynamicClass} ${className}`

  const styles = {
    ...variableMap(theme),
    ...variableMap(variants[variant as keyof typeof variants]),
    ...variableMap(sizes[size as keyof typeof sizes]),
    ...variableMap(shapes[shape as keyof typeof shapes]),
    ...style,
  }

  return (
    <button
      {...rest}
      className={classNames}
      ref={ref}
      style={styles as CSSProperties}
      type="button"
    >
      {children || 'Test button tailwind'}
    </button>
  )
}

Button.displayName = 'TailwindButton'
