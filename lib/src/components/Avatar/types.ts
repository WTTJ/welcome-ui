import type { colors } from './index'

export type Colors = (typeof colors)[number]

// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
