import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function GetIcon(props) {
  return <Icon alt="Get" content={content} {...props} />
}
