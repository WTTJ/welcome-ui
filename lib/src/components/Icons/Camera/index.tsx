import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CameraIcon: React.FC<IconProps> = props => {
  return <Icon alt="Camera" content={content} {...props} />
}
