import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PlaylistIcon: React.FC<IconProps> = props => {
  return <Icon alt="Playlist" content={content} {...props} />
}
