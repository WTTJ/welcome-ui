import React, { forwardRef } from 'react'
import { Tag, TagOptions } from '@welcome-ui/tag'
import { CreateWuiProps } from '@welcome-ui/system'

export type BadgeProps = CreateWuiProps<typeof Tag, Omit<TagOptions, 'size'>>

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => (
  <Tag ref={ref} size="sm" {...props} />
))

Badge.displayName = 'Badge'
