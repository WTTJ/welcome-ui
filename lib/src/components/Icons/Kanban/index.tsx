import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const KanbanIcon: React.FC<IconProps> = props => {
  return <Icon alt="Kanban" content={content} {...props} />
}
