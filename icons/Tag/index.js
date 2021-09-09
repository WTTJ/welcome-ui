import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function TagIcon(props) {
  return <Icon alt="Tag" content={content} {...props} />
}
