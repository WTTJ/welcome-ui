import React, { forwardRef } from 'react'
import { Tag, TagProps } from '@welcome-ui/tag'

export interface BadgeProps extends Omit<TagProps, 'size'> {}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => (
  <Tag ref={ref} size="sm" {...props} />
))

Badge.displayName = 'Badge'
