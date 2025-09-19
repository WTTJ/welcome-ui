import type { ComponentPropsWithRef, HTMLAttributes, ReactNode } from 'react'

export type LoaderProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode
    className?: string
    size?: Size
    variant?: Variant
  }

type Variant = 'neutral' | 'primary' | 'violet'

export const ValidSize = ['xs', 'sm', 'md', 'lg'] as const

export type LoaderSize = (typeof ValidSize)[number]

// eslint-disable-next-line perfectionist/sort-intersection-types, perfectionist/sort-union-types
export type Size = (Record<never, never> & (number | string)) | LoaderSize
