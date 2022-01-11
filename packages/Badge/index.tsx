import React from 'react'
import { Tag, TagOptions } from '@welcome-ui/tag'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

export type BadgeOptions = Omit<TagOptions, 'size'>
export type BadgeProps = CreateWuiProps<'div', BadgeOptions>

export const Badge = forwardRef<'div', BadgeProps>((props, ref) => (
  <Tag ref={ref} size="sm" {...props} />
))

Badge.displayName = 'Badge'
