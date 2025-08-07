import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'
import { forwardRef } from 'react'

import { shapes, sizes, theme, variableMap, variants } from './tokens'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
  className?: string
  shape?: 'circle' | 'square'
  size?: 'lg' | 'md' | 'sm' | 'xs'
  style?: CSSProperties
  variant?:
    | 'ghost'
    | 'ghost-danger'
    | 'primary'
    | 'primary-danger'
    | 'secondary'
    | 'tertiary'
    | 'tertiary-danger'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, className, shape = 'square', size = 'md', style, variant = 'primary', ...rest },
    ref
  ) => {
    const base = [
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'text-center',
      'cursor-pointer',
      'transition-all',
      'outline-transparent',
    ].join(' ')

    const dynamicClasses = [
      'bg-(--backgroundColor)',
      'active:bg-(--backgroundColorActive)',
      'hover:bg-(--backgroundColorHover)',
      'border-(length:--borderWidth)',
      'border-(--borderColor)',
      'active:border-(--borderColorActive)',
      'hover:border-(--borderColorHover)',
      'outline-(length:--outlineWidth)',
      'focus:outline-(--outlineColorFocus)',
      'h-(--height)',
      'px-(--paddingX)',
      'rounded-(--borderRadius)',
      'text-(length:--fontSize)',
      'text-(color:--color)',
      'font-(--fontWeight)',
      'duration-(--transitionDuration)',
    ].join(' ')

    const classNames = `${base} ${dynamicClasses} ${className}`

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
)

Button.displayName = 'TailwindButton'
