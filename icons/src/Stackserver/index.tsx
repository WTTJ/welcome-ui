import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const StackserverIcon: React.FC<IconProps> = props => {
  return <Icon alt="Stackserver" content={content} {...props} />
}

export const StackserverIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
