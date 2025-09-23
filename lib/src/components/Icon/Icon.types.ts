import type { ForwardRefProps } from '@/utils'

export interface IconOptions {
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl'
}

export type IconProps = ForwardRefProps<
  IconOptions & {
    content?: {
      block: string
      height?: number
      isFlag?: boolean
      stroked?: boolean
      viewBox?: string
      width?: number
    }
  },
  'svg'
>
