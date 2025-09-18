import type { ComponentPropsWithRef } from 'react'

export interface IconOptions {
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl'
}

export type IconProps = ComponentPropsWithRef<'svg'> &
  IconOptions &
  Omit<React.SVGProps<SVGSVGElement>, 'size'> & {
    alt?: string
    content?: {
      block: string
      height?: number
      isFlag?: boolean
      stroked?: boolean
      viewBox?: string
      width?: number
    }
    ref?: React.Ref<SVGSVGElement>
  }
