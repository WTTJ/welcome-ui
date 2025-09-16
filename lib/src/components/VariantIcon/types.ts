import type { ComponentPropsWithRef, CSSProperties, HTMLAttributes, ReactNode } from 'react'

export type VariantIconProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode
    className?: string
    size?: Size
    style?: CSSProperties
    variant?: Variant
  }

type Size = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl'
type Variant = 'ai' | 'danger' | 'default' | 'info' | 'success' | 'warning'
