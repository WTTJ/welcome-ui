import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function TrashIcon(props) {
  return <Icon alt="Trash" content={content} {...props} />
}
