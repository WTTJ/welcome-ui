import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AvatarBottomIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarBottom" content={content} {...props} />
}

export const AvatarBottomIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
