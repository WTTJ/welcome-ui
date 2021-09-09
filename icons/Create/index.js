import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function CreateIcon(props) {
  return <Icon alt="Create" content={content} {...props} />
}
