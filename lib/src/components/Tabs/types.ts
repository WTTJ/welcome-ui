import type { TabStore, TabStoreProps } from '@ariakit/react'

import type { UseTab, UseTabState } from '.'

export interface ActiveBarProps {
  activeTab: HTMLElement
  listRef: React.MutableRefObject<undefined>
  orientation: Omit<UseTabState['orientation'], 'both'>
}

export interface ActiveBarReturn {
  offset?: number
  orientation?: Omit<UseTabState['orientation'], 'both'>
  size?: number
}

export type Size = 'md' | 'sm'

export type TabListProps = {
  children: React.ReactNode
  className?: string
  size?: Size
  store: UseTab
}

export interface TabOptions {
  children: React.ReactNode
  className?: string
  id?: string
  size?: Size
  store: TabStore
}

export type TabPanelProps = {
  children: React.ReactNode
  store: UseTab
  tabId?: string
}

export type TabProps = TabOptions & TabStoreProps
