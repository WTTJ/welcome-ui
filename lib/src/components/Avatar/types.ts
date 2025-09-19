import type { PolymorphicProps } from '@/theme/types'

import type { colors } from './index'

export interface AvatarOptions {
  getInitials?: (name: string) => string
  name: string
  size?: Size
  src?: string
}

export type AvatarProps<T extends React.ElementType = 'div'> = AvatarOptions & PolymorphicProps<T>

export type Colors = (typeof colors)[number]

// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
