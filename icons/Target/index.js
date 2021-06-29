import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function TargetIcon(props) {
  return <Icon alt="Target" content={content} {...props} />
}
