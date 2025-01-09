import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const PlayIcon: React.FC<IconProps> = props => {
  return <Icon alt="Play" content={content} {...props} />
}
