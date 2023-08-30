import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ReviewOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="ReviewOutline" content={content} {...props} />
}

export const ReviewOutlineIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
