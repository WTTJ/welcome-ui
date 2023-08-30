import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AvatarTopIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarTop" content={content} {...props} />
}

export const AvatarTopIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
