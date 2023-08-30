import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AddIcon: React.FC<IconProps> = props => {
  return <Icon alt="Add" content={content} {...props} />
}

export const AddIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
