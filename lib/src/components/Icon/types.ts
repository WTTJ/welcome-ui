import type { CSSProperties } from 'react'

import type { ForwardRefProps } from '@/utils'

import type { icons } from './icons'

export type IconName = (typeof icons)[number]

export interface IconOptions {
  colors?: CSSProperties[]
  size?: '2xl' | '3xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl'
}

export type IconProps = ForwardRefProps<
  IconOptions & {
    name: IconName
  },
  'svg'
>
