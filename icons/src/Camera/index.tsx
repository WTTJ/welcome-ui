import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CameraIcon: React.FC<IconProps> = props => {
  return <Icon alt="Camera" content={content} {...props} />
}

export const CameraIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
