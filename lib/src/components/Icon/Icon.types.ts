import type { ForwardRefProps } from '@/utils'

export interface IconOptions {
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl'
}

export type IconProps = ForwardRefProps<
  IconOptions & {
    name: string
  },
  'svg'
>
