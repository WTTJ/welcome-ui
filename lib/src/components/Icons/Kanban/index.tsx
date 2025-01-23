import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const KanbanIcon: React.FC<IconProps> = props => {
  return <Icon alt="Kanban" content={content} {...props} />
}
