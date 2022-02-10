import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function UnavailableIcon(props) {
  return <Icon alt="Unavailable" content={content} {...props} />
}
