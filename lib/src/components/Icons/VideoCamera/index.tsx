import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const VideoCameraIcon: React.FC<IconProps> = props => {
  return <Icon alt="VideoCamera" content={content} {...props} />
}
