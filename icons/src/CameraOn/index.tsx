import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CameraOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="CameraOn" content={content} {...props} />
}
