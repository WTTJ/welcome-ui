import type { TabPanelProps as AriakitTabPanelProps, TabStore, TabStoreProps } from '@ariakit/react'

import type { IconName } from '@/components/Icon/types'

import type { UseTab } from './index'

export type Size = 'lg' | 'md'

export type TabListProps = {
  children: React.ReactNode
  className?: string
  size?: Size
  store: UseTab
}

export interface TabOptions {
  badge?: number | string
  children: React.ReactNode
  className?: string
  icon?: IconName | React.ReactNode
  iconColor?: 'blue' | 'green' | 'orange' | 'pink' | 'teal' | 'violet' | 'warm'
  id?: string
  store: TabStore
}

export type TabPanelProps = AriakitTabPanelProps

export type TabProps = TabOptions & TabStoreProps
