import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const KanbanIcon: React.FC<IconProps> = props => {
  return <Icon alt="Kanban" content={content} {...props} />
}

export const KanbanIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
