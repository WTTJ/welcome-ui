import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HeartIcon: React.FC<IconProps> = props => {
  return <Icon alt="Heart" content={content} {...props} />
}

export const HeartIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
