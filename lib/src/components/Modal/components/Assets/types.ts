import type { DialogOptions } from '@ariakit/react'

export type AssetWithTitleProps = {
  children: React.ReactNode
  customContent?: JSX.Element | string
  subtitle?: JSX.Element | string
  title?: JSX.Element | string
}

export type BackdropProps = Pick<DialogOptions, 'hideOnInteractOutside'>

export type IframeProps = {
  children: JSX.Element
}
