import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MountainIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mountain" content={content} {...props} />
}

export const MountainIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
