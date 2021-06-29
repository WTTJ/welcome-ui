import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function QuoteIcon(props) {
  return <Icon alt="Quote" content={content} {...props} />
}
