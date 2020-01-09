import React, { forwardRef, ReactNode } from 'react'
import { Tag } from '@welcome-ui/tag'

export interface Props {
  children?: ReactNode
}

export const Badge = forwardRef<HTMLDivElement, Props>((props, ref) => (
  <Tag ref={ref} size="sm" {...props} />
))

Badge.displayName = 'Badge'
