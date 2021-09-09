import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function HomeIcon(props) {
  return <Icon alt="Home" content={content} {...props} />
}
