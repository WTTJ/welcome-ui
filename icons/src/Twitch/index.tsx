import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TwitchIcon: React.FC<IconProps> = props => {
  return <Icon alt="Twitch" content={content} {...props} />
}

export const TwitchIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
