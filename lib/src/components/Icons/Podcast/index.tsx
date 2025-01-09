import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PodcastIcon: React.FC<IconProps> = props => {
  return <Icon alt="Podcast" content={content} {...props} />
}
