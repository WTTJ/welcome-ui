import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const TwitchIcon: React.FC<IconProps> = props => {
  return <Icon alt="Twitch" content={content} {...props} />
}
