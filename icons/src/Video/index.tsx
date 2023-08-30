import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const VideoIcon: React.FC<IconProps> = props => {
  return <Icon alt="Video" content={content} {...props} />
}

export const VideoIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
