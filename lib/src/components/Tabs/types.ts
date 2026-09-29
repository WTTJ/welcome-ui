import type { TabPanelProps as AriakitTabPanelProps, TabStore, TabStoreProps } from '@ariakit/react'

import type { IconName } from '@/components/Icon/types'

import type { BadgeProps } from '../Badge/types'

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
  badgeVariant?: BadgeProps['variant']
  children: React.ReactNode
  className?: string
  dashed?: boolean
  icon?: IconName | React.ReactNode
  iconColor?: 'blue' | 'green' | 'orange' | 'pink' | 'teal' | 'violet' | 'warm'
  id?: string
  store: TabStore
}

export type TabPanelProps = AriakitTabPanelProps

export type TabProps = TabOptions & TabStoreProps
