import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const VideoCameraIcon: React.FC<IconProps> = props => {
  return <Icon alt="VideoCamera" content={content} {...props} />
}
