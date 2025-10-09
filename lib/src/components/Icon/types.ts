import type { ForwardRefProps } from '@/utils'

import type { icons } from './icons'

export type IconName = (typeof icons)[number]

export interface IconOptions {
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl'
}

export type IconProps = ForwardRefProps<
  IconOptions & {
    name: IconName
  },
  'svg'
>
