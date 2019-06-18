import React, { forwardRef } from 'react'

import { Tag } from '../Tag'

export const Badge = forwardRef((props, ref) => <Tag ref={ref} size="sm" {...props} />)

Badge.displayName = 'Badge'
