import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AvatarAccessoryIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarAccessory" content={content} {...props} />
}

export const AvatarAccessoryIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
