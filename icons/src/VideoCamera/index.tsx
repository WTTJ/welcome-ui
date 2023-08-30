import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const VideoCameraIcon: React.FC<IconProps> = props => {
  return <Icon alt="VideoCamera" content={content} {...props} />
}

export const VideoCameraIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
