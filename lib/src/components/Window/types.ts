import type { HTMLAttributes, PropsWithChildren } from 'react'

import type { UseTab } from '@/components/Tabs'
import type { MergeProps, PropsWithAs } from '@/utils'

import type { IconName } from '../Icon/types'

export type ActionButtonProps = HTMLAttributes<HTMLButtonElement> & { icon: IconName }

export type BodyProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
}

export type BoxTextProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export type HeaderLeftActionsProps = {
  isExpandable?: boolean
  onExpandChange?: (expanded: boolean) => void
}

export type HeaderProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export type HeaderRightActionsProps = {
  children?: React.ReactNode
  isClosable?: boolean
  onClose?: VoidFunction
}

export type HeaderTabItem = {
  icon: IconName
  id: string
  title: string
}

export type HeaderTabsProps = {
  items: HeaderTabItem[]
  store: UseTab
}

export type HeaderTitleProps = PropsWithAs<'h2', { title: JSX.Element | string }>

export type MediaProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export interface TabPanelOptions {
  store: UseTab
  tabId?: string
}

export type TabPanelProps = MergeProps<
  TabPanelOptions,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>

export interface WindowOptions {
  role?: 'alertdialog' | 'dialog' | 'region'
}

export type WindowProps = MergeProps<
  WindowOptions,
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>
