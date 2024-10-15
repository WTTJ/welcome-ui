import React from 'react'

export type Action = string | (() => void)
export type DefaultToolbarItem = {
  action?: Action
  icon?: React.ReactElement | string
  name: string
  title?: string
}
export type DefaultToolbar = DefaultToolbarItem[]

export const DEFAULT_TOOLBAR: DefaultToolbar = [
  { name: 'bold', title: 'Bold' },
  { name: 'italic', title: 'Italic' },
  { name: 'strikethrough', title: 'Strikethrough' },
  { name: 'link', title: 'Link' },
  { name: 'divider' },
  { name: 'heading_1', title: 'Heading 1' },
  { name: 'heading_2', title: 'Heading 2' },
  { name: 'divider' },
  { name: 'unordered_list', title: 'Unordered list' },
  { name: 'ordered_list', title: 'Ordered list' },
  { name: 'divider' },
  { name: 'code', title: 'Code' },
  { name: 'quote', title: 'Quote' },
  { name: 'divider' },
  { name: 'emoji', icon: '🙂', title: 'Emoji' },
]
