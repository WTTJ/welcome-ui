import React from 'react'

import type { IconProps } from '../../Icon'
import { Icon } from '../../Icon'

import content from './content.json'

export const KanbanIcon: React.FC<IconProps> = props => {
  return <Icon alt="Kanban" content={content} data-wui-icon {...props} />
}
