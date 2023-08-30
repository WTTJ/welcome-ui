import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TrashIcon: React.FC<IconProps> = props => {
  return <Icon alt="Trash" content={content} {...props} />
}

export const TrashIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
