import React, { forwardRef } from 'react'
import { WuiProps } from '@welcome-ui/system'
import { Tag, TagProps } from '@welcome-ui/tag'

export type BadgeProps = Omit<TagProps, 'size'>

export const Badge = forwardRef<HTMLDivElement, BadgeProps & WuiProps>((props, ref) => (
  <Tag ref={ref} size="sm" {...props} />
))

Badge.displayName = 'Badge'
