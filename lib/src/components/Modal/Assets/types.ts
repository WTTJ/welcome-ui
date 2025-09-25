import type { DialogOptions } from '@ariakit/react'
import type { ComponentProps } from 'react'

import type { MergeProps } from '@/utils'

export interface AssetWithTitleOptions {
  children: React.ReactNode
  customContent?: JSX.Element | string
  subtitle?: JSX.Element | string
  title?: JSX.Element | string
}

export type AssetWithTitleProps = MergeProps<AssetWithTitleOptions, ComponentProps<'div'>>

export type BackdropProps = Pick<DialogOptions, 'hideOnInteractOutside'>
