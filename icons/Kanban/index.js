import React from 'react'
import { Icon } from '@welcome-ui/icon'

import content from './content.json'

export function KanbanIcon(props) {
  return <Icon alt="Kanban" content={content} {...props} />
}
