import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CameraIcon: React.FC<IconProps> = props => {
  return <Icon alt="Camera" content={content} {...props} />
}
