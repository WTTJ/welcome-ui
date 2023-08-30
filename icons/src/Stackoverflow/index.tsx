import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const StackoverflowIcon: React.FC<IconProps> = props => {
  return <Icon alt="Stackoverflow" content={content} {...props} />
}

export const StackoverflowIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
