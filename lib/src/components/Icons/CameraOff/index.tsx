import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CameraOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="CameraOff" content={content} {...props} />
}
