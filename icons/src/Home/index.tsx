import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HomeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Home" content={content} {...props} />
}

export const HomeIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
