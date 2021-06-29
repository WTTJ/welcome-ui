import React, { forwardRef } from 'react'
import { Tag, TagProps } from '@welcome-ui/tag'

export type BadgeProps = Omit<TagProps, 'size'>

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => (
  <Tag ref={ref} size="sm" {...props} />
))

Badge.displayName = 'Badge'
