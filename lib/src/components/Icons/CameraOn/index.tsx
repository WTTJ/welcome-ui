import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CameraOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="CameraOn" content={content} {...props} />
}
