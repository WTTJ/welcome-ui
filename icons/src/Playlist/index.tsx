import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PlaylistIcon: React.FC<IconProps> = props => {
  return <Icon alt="Playlist" content={content} {...props} />
}

export const PlaylistIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
