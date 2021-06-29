import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function BulbIcon(props) {
  return <Icon alt="Bulb" content={content} {...props} />
}
