import type { PolymorphicProps } from '@/theme/types'

import type { TAG_NAMES } from '.'

export interface TextOptions {
  lines?: number
  variant?: keyof typeof TAG_NAMES
  withDash?: boolean
}

export type TextProps<T extends React.ElementType = 'p'> = PolymorphicProps<T> & TextOptions
