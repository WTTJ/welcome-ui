import type { HTMLAttributes, PropsWithChildren } from 'react'

import type { UseTab } from '@/components/Tabs'
import type { PropsWithAs } from '@/utils'

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

export type TabPanelProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  store: UseTab
  tabId?: string
}

export type WindowProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & {
  role?: 'alertdialog' | 'dialog' | 'region'
}
