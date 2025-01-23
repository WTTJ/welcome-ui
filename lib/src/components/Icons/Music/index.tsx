import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MusicIcon: React.FC<IconProps> = props => {
  return <Icon alt="Music" content={content} {...props} />
}
