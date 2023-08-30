import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const StarIcon: React.FC<IconProps> = props => {
  return <Icon alt="Star" content={content} {...props} />
}

export const StarIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
