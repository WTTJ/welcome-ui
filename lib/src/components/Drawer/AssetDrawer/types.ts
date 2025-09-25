import type { DialogOptions } from '@ariakit/react'
import type { ComponentProps, ComponentPropsWithRef } from 'react'

import type { IconProps } from '@/components/Icon'

export interface AssetDrawerOptions extends DialogOptions<'div'> {
  maxWidth?: number | string
}

export type AssetDrawerProps = AssetDrawerOptions & ComponentPropsWithRef<'div'>

export type HeaderProps = ComponentProps<'div'> & {
  /**
   * Show on right a block, for example an HeaderAction
   */
  action?: React.ReactNode
  /**
   * Icon from Icon component on the gray square
   */
  icon?: React.FC<IconProps>
  /**
   * Add a back icon on header and call function on click
   */
  onBackButtonClick?: (props?: unknown) => void
  /**
   * List of tags
   */
  subtitle?: React.ReactNode
  /**
   * Title of asset
   */
  title: React.ReactNode
}

export type IconBlockProps = {
  icon: React.FC<IconProps>
  size?: 'md' | 'sm'
}
