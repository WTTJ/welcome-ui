import type { ComponentPropsWithRef, HTMLAttributes, ReactNode } from 'react'

import type { MergeProps } from '@/utils/forwardRefWithAs'

export interface LoaderOptions {
  children?: ReactNode
  size?: Size
  variant?: Variant
}

export type LoaderProps = MergeProps<LoaderOptions, ElementAttributes>

type ElementAttributes = MergeProps<ComponentPropsWithRef<'div'>, HTMLAttributes<HTMLDivElement>>

type Variant = 'neutral' | 'primary' | 'violet'

export const ValidSize = ['xs', 'sm', 'md', 'lg'] as const

export type LoaderSize = (typeof ValidSize)[number]

// eslint-disable-next-line perfectionist/sort-intersection-types, perfectionist/sort-union-types
export type Size = (Record<never, never> & (number | string)) | LoaderSize
