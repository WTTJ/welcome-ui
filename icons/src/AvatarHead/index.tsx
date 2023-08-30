import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AvatarHeadIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarHead" content={content} {...props} />
}

export const AvatarHeadIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
