import React, { forwardRef } from 'react'
import Tag from '@welcome-ui/tag'

export const Badge = forwardRef((props, ref) => <Tag ref={ref} size="sm" {...props} />)

Badge.displayName = 'Badge'

export default Badge
