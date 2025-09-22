import type { PolymorphicProps } from '@/theme/types'

export interface AspectRatioOptions {
  ratio?: number
}

export type AspectRatioProps<T extends React.ElementType = 'div'> = AspectRatioOptions &
  PolymorphicProps<T>
