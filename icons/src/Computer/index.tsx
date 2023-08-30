import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ComputerIcon: React.FC<IconProps> = props => {
  return <Icon alt="Computer" content={content} {...props} />
}

export const ComputerIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
