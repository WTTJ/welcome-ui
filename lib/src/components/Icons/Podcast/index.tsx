import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PodcastIcon: React.FC<IconProps> = props => {
  return <Icon alt="Podcast" content={content} {...props} />
}
