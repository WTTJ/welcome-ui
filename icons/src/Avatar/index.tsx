import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AvatarIcon: React.FC<IconProps> = props => {
  return <Icon alt="Avatar" content={content} {...props} />
}

export const AvatarIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
