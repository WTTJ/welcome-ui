import type { TabListProps, TabProps } from '@ariakit/react'
import type { HTMLAttributes, PropsWithChildren } from 'react'

import type { UseTab } from '@/components/Tabs'
import type { MergeProps, PropsWithAs } from '@/utils'

import type { IconName } from '../Icon/types'

export interface ActionButtonOptions {
  icon: IconName
}

export type ActionButtonProps = MergeProps<HTMLAttributes<HTMLButtonElement>, ActionButtonOptions>
export interface BodyOptions {
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
}

export type BodyProps = MergeProps<PropsWithChildren<HTMLAttributes<HTMLDivElement>>, BodyOptions>

export type BoxTextProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export interface HeaderLeftActionsOptions {
  isExpandable?: boolean
  onExpandChange?: (expanded: boolean) => void
}
export type HeaderLeftActionsProps = MergeProps<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
  HeaderLeftActionsOptions
>

export type HeaderProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export interface HeaderRightActionsOptions {
  isClosable?: boolean
  onClose?: VoidFunction
}

export type HeaderRightActionsProps = MergeProps<
  PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
  HeaderRightActionsOptions
>

export type HeaderTabItem = TabProps & {
  icon?: IconName
  id: string
}

export interface HeaderTabsOptions {
  children: React.ReactNode
}

export type HeaderTabsProps = MergeProps<TabListProps<'div'>, HeaderTabsOptions>

export interface HeaderTitleOptions {
  title: JSX.Element | string
}

export type HeaderTitleProps = PropsWithAs<'p', HeaderTitleOptions>

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
