import type { ComponentPropsWithRef, HTMLAttributes, ReactNode } from 'react'

import type { primitives } from '../../theme/tokens'

export type LoaderProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> & {
    children?: ReactNode
    className?: string
    color?: keyof typeof primitives.colors
    size?: Size
  }

export const ValidSize = ['xs', 'sm', 'md', 'lg'] as const

export type LoaderSize = (typeof ValidSize)[number]

// eslint-disable-next-line perfectionist/sort-intersection-types, perfectionist/sort-union-types
export type Size = (Record<never, never> & (number | string)) | LoaderSize
