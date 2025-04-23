import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const VideoCamera2Icon: React.FC<IconProps> = props => {
  return <Icon alt="VideoCamera2" content={content} {...props} />
}
