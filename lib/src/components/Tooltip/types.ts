import type {
  TooltipProps as AriakitTooltipProps,
  TooltipStoreProps as AriakitTooltipStoreProps,
} from '@ariakit/react'

export interface TooltipOptions {
  children: React.ReactNode
  content: JSX.Element | string
  fixed?: boolean
  gutter?: number
  placement?: TooltipPlacement
  title?: JSX.Element | string
}

export type TooltipPlacement = AriakitTooltipStoreProps['placement']

export type TooltipProps = Omit<AriakitTooltipProps, 'children' | 'content'> & TooltipOptions
