import React, { forwardRef } from 'react'
import { SystemProps } from '@xstyled/system'
import { Tag, TagProps } from '@welcome-ui/tag'

export type BadgeProps = Omit<TagProps, 'size'>

export const Badge = forwardRef<HTMLDivElement, BadgeProps & SystemProps>((props, ref) => (
  <Tag ref={ref} size="sm" {...props} />
))

Badge.displayName = 'Badge'
