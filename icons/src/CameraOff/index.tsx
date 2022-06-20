import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CameraOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="CameraOff" content={content} {...props} />
}
