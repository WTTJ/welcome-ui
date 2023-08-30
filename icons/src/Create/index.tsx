import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CreateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Create" content={content} {...props} />
}

export const CreateIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
