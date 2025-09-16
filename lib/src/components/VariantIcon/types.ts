import type { ComponentPropsWithRef, HTMLAttributes } from 'react'

export type VariantIconProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> &
  VariantIconOptions & {
    className?: string
  }

type Size = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl'
type Variant = 'ai' | 'danger' | 'default' | 'info' | 'success' | 'warning'

interface VariantIconOptions {
  size?: Size
  variant?: Variant
}
