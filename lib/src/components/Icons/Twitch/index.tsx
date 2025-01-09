import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const TwitchIcon: React.FC<IconProps> = props => {
  return <Icon alt="Twitch" content={content} {...props} />
}
