import type { CSSProperties } from 'react'
import { forwardRef } from 'react'

import { shapes, sizes, theme, variableMap, variants } from './theme'

type ButtonProps = {
  children?: React.ReactNode
  className?: string
  shape?: 'circle' | 'square'
  size: 'lg' | 'md' | 'sm'
  style?: CSSProperties
  variant?: 'disabled' | 'ghost' | 'primary' | 'secondary' | 'tertiary'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, shape = 'square', size = 'md', style, variant = 'primary' }, ref) => {
    const base =
      'relative inline-flex items-center justify-center text-center cursor-pointer transition-all'
    const dynamicClasses =
      'bg-color(--backgroundColor) border-color(--borderColor) px-(--paddingX) py(--paddingY) border-radius(--borderRadius)'
    const classNames = `${base} ${dynamicClasses} ${className}`
    const styles = {
      ...variableMap(theme),
      ...variableMap(variants[variant as keyof typeof variants]),
      ...variableMap(sizes[size as keyof typeof sizes]),
      ...variableMap(shapes[shape as keyof typeof shapes]),
      ...style,
    }

    return (
      <button className={classNames} ref={ref} style={{ ...styles } as CSSProperties} type="button">
        {children || 'Test button tailwind'}
      </button>
    )
  }
)

Button.displayName = 'TailwindButton'
