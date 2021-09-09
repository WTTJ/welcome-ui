import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function ShowIcon(props) {
  return <Icon alt="Show" content={content} {...props} />
}
