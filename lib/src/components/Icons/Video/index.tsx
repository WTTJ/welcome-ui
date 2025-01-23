import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const VideoIcon: React.FC<IconProps> = props => {
  return <Icon alt="Video" content={content} {...props} />
}
