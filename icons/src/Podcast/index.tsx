import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PodcastIcon: React.FC<IconProps> = props => {
  return <Icon alt="Podcast" content={content} {...props} />
}

export const PodcastIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
