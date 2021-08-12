import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const KanbanIcon: React.FC<IconProps> = props => {
  return <Icon alt="Kanban" content={content} {...props} />
}
