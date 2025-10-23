import type {} from 'react'

// we want to keep DefaultFieldIconSize in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
export type DefaultFieldIconSize = 'xs' | 'sm'

// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
export type Size = 'sm' | 'md' | 'lg'

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    [name: `data-${string}`]: string
  }
}
