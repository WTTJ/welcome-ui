import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function BookIcon(props) {
  return <Icon alt="Book" content={content} {...props} />
}
