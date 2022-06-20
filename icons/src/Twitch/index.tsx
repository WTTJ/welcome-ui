import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TwitchIcon: React.FC<IconProps> = props => {
  return <Icon alt="Twitch" content={content} {...props} />
}
