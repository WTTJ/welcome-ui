import type { DownshiftProps } from 'downshift'
import type { ComponentProps } from 'react'

import type { Size } from '@/types'
import type { MergeProps } from '@/utils'
import type { CreateEvent } from '@/utils/create-event'

//TODO fix unknown item
export type Item = SearchOption | SearchOptionGroup | string | unknown
export type SearchOption = { label: string; value: string }
export type SearchOptionGroup = { label: string; options: SearchOption[] }

export interface SearchOptions {
  dataTestId?: string
  groupsEnabled?: boolean
  hasIcon?: boolean
  icon?: React.ReactElement
  iconPlacement?: 'left' | 'right'
  itemToString: (item: Item) => string
  minChars?: number
  onChange?: (item: Item, event: CreateEvent) => void
  renderGroupHeader?: (result: SearchOptionGroup) => React.ReactElement
  renderItem: (item: Item) => React.ReactElement | string
  search: (query: string) => Promise<unknown>
  size?: Size
  throttle?: number
  transparent?: boolean
  value?: Item
  variant?: 'danger' | 'success' | 'warning'
}

export type SearchProps = MergeProps<
  MergeProps<SearchOptions, DownshiftProps<SearchOption>>,
  ComponentProps<'input'>
>
