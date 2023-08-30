import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MoreIcon: React.FC<IconProps> = props => {
  return <Icon alt="More" content={content} {...props} />
}

export const MoreIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
