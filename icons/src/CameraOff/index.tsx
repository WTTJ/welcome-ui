import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CameraOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="CameraOff" content={content} {...props} />
}

export const CameraOffIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
