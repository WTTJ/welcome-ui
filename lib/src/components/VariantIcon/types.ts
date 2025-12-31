import type { ComponentPropsWithRef, HTMLAttributes } from 'react'

import type { IconProps } from '@/components/Icon/types'

export type VariantIconProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> &
  VariantIconOptions

interface VariantIconOptions {
  size?: IconProps['size']
  variant?: 'ai' | 'danger' | 'info' | 'success' | 'warning'
}
