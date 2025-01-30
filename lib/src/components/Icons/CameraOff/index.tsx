import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CameraOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="CameraOff" content={content} {...props} />
}
