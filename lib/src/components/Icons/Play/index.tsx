import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PlayIcon: React.FC<IconProps> = props => {
  return <Icon alt="Play" content={content} {...props} />
}
