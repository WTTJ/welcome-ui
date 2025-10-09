import type { DialogOptions } from '@ariakit/react'
import type { ComponentProps, ComponentPropsWithRef } from 'react'

import type { IconName } from '@/components/Icon/types'

export interface AssetDrawerOptions extends DialogOptions<'div'> {
  /**
   * Max width of the drawer
   * Number values are converted to pixels
   * @example '300px', '50rem', 300
   */
  maxWidth?: `${number}px` | `${number}rem` | number
}

export type AssetDrawerProps = AssetDrawerOptions & ComponentPropsWithRef<'div'>

export type BackdropProps = Pick<BaseDialogOptions, 'backdrop' | 'hideOnInteractOutside'>

export type HeaderProps = ComponentProps<'div'> & {
  /**
   * Show on right a block, for example an HeaderAction
   */
  action?: React.ReactNode
  /**
   * Icon from Icon component on the gray square
   */
  iconName?: IconName
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
  iconName: IconName
  size?: 'md' | 'sm'
}
type BaseDialogOptions = Omit<DialogOptions<'div'>, 'as'>
