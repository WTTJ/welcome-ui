import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PencilIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pencil" content={content} {...props} />
}

export const PencilIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
