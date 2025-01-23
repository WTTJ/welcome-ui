import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PlaylistIcon: React.FC<IconProps> = props => {
  return <Icon alt="Playlist" content={content} {...props} />
}
