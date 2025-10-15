/* eslint-disable perfectionist/sort-union-types */
import type { PolymorphicProps } from '@/theme/types'

export interface TextOptions {
  lines?: number
  sizes?: 'lg' | 'md' | 'sm' | 'xl'
  strong?: boolean
  variant?:
    | 'display-xl'
    | 'display-lg'
    | 'display-md'
    | 'display-sm'
    | 'heading-xl'
    | 'heading-lg'
    | 'heading-md'
    | 'heading-sm'
    | 'heading-xs'
    | 'heading-md-strong'
    | 'heading-sm-strong'
    | 'heading-xs-strong'
    | 'body-xl'
    | 'body-lg'
    | 'body-md'
    | 'body-sm'
    | 'body-xl-strong'
    | 'body-lg-strong'
    | 'body-md-strong'
    | 'body-sm-strong'
    | 'label-xl'
    | 'label-lg'
    | 'label-md'
    | 'label-sm'
    | 'label-md-strong'
    | 'label-sm-strong'
  withDash?: boolean
}

export type TextProps<T extends React.ElementType = 'p'> = PolymorphicProps<T> & TextOptions
