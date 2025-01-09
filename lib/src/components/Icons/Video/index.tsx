import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const VideoIcon: React.FC<IconProps> = props => {
  return <Icon alt="Video" content={content} {...props} />
}
