import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CameraIcon: React.FC<IconProps> = props => {
  return <Icon alt="Camera" content={content} {...props} />
}
