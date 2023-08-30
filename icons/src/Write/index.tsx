import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const WriteIcon: React.FC<IconProps> = props => {
  return <Icon alt="Write" content={content} {...props} />
}

export const WriteIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
