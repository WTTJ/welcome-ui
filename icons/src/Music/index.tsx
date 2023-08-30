import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MusicIcon: React.FC<IconProps> = props => {
  return <Icon alt="Music" content={content} {...props} />
}

export const MusicIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
