import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const MusicIcon: React.FC<IconProps> = props => {
  return <Icon alt="Music" content={content} {...props} />
}
