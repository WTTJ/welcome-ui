import type { DownshiftProps } from 'downshift'
import type { ComponentProps } from 'react'

import type { Size } from '@/types'
import type { CreateEvent } from '@/utils/create-event'
import type { MergeProps } from '@/utils/forwardRefWithAs'

export type SelectOption = {
  disabled?: boolean
  icon?: React.ReactElement
  label: string
  value: SelectOptionValue
}
export type SelectOptionGroup = { label: string; options: SelectOption[] }
export type SelectOptionItem = SelectOption | SelectOptionGroup

export interface SelectOptions {
  allowUnselectFromList?: boolean
  /** We need to add `autoComplete` off to avoid select UI issues when is an input */
  autoComplete?: string
  dataTestId?: string
  disableCloseOnSelect?: boolean
  groupsEnabled?: boolean
  hasIcon?: boolean
  icon?: React.ReactElement
  iconPlacement?: 'both' | 'left' | 'right'
  isClearable?: boolean
  isCreatable?: boolean
  isMultiple?: boolean
  isSearchable?: boolean
  onChange?: (value: SelectOptionValue | SelectOptionValue[], event?: CreateEvent) => void
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onCreate?: (option: string, event: CreateEvent) => void
  options: SelectOptionsType
  renderCreateItem?: (inputValue: SelectValue) => void
  renderGroupHeader?: (option: SelectOptionGroup) => React.ReactNode
  renderItem?: (item: SelectOption, isItemSelected?: boolean) => React.ReactElement | string
  renderMultiple?: (
    values: SelectOption[],
    handleRemove: (value: string) => void
  ) => React.ReactElement
  renderNoResults?: (inputValue: SelectValue) => React.ReactNode
  size?: Size
  transparent?: boolean
  value?: SelectValue
  variant?: 'danger' | 'success' | 'warning'
}
export type SelectOptionsType = Array<SelectOption | SelectOptionGroup>

export type SelectOptionValue = number | string

export type SelectProps = MergeProps<
  MergeProps<SelectOptions, DownshiftProps<SelectOption>>,
  ComponentProps<'input'>
>

export type SelectValue =
  | (number | SelectOption | string)[]
  | number
  | SelectOption
  | string
  | string[]
