import type { PolymorphicProps } from '@/theme/types'

export interface AvatarOptions {
  getInitials?: (name: string) => string
  name?: string
  size?: Size
  src?: string
}

export type AvatarProps<T extends React.ElementType = 'div'> = AvatarOptions & PolymorphicProps<T>

// we want to keep Size in a natural order for documentation
// eslint-disable-next-line perfectionist/sort-union-types
type Size = 'xs' | 'sm' | 'md' | 'lg'
