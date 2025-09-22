import type { PolymorphicProps } from '@/theme/types'

export type AspectRatioProps<T extends React.ElementType = 'div'> = PolymorphicProps<T> & {
  ratio?: number
}
