import type { TabStore, TabStoreProps } from '@ariakit/react'

import type { UseTab } from '.'

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
  icon?: 'folder' | React.ReactNode
  iconColor?: 'blue' | 'green' | 'orange' | 'pink' | 'teal' | 'violet' | 'warm'
  id?: string
  size?: Size
  store: TabStore
}

export type TabProps = TabOptions & TabStoreProps
