import type { DialogOptions } from '@ariakit/react'

import type { MergeProps } from '@/utils'

export type AssetWithTitleOptions = {
  children: React.ReactNode
  customContent?: JSX.Element | string
  subtitle?: JSX.Element | string
  title?: JSX.Element | string
}

export type AssetWithTitleProps = MergeProps<
  AssetWithTitleOptions,
  React.HTMLAttributes<HTMLDivElement>
>

export type BackdropProps = Pick<DialogOptions, 'hideOnInteractOutside'>

export type IframeProps = {
  children: JSX.Element
}
