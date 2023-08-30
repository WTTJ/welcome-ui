import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CameraOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="CameraOn" content={content} {...props} />
}

export const CameraOnIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
