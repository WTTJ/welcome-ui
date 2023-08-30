import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const UpIcon: React.FC<IconProps> = props => {
  return <Icon alt="Up" content={content} {...props} />
}

export const UpIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
