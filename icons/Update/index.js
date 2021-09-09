import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function UpdateIcon(props) {
  return <Icon alt="Update" content={content} {...props} />
}
