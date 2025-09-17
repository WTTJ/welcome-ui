import type { ComponentPropsWithRef, HTMLAttributes } from 'react'

import type { IconProps } from '../Icon'

export type VariantIconProps = ComponentPropsWithRef<'div'> &
  HTMLAttributes<HTMLDivElement> &
  VariantIconOptions & {
    className?: string
  }

type Variant = 'ai' | 'danger' | 'default' | 'info' | 'success' | 'warning'

interface VariantIconOptions {
  size?: IconProps['size']
  variant?: Variant
}
