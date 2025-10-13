import type { PolymorphicProps } from '@/theme/types'

export type VisuallyHiddenProps<T extends React.ElementType = 'span'> = PolymorphicProps<T> &
  VisuallyHiddenOptions

interface VisuallyHiddenOptions {
  children: React.ReactNode
}
