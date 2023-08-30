import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="Left" content={content} {...props} />
}

export const LeftIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
