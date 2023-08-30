import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ThumbDownIcon: React.FC<IconProps> = props => {
  return <Icon alt="ThumbDown" content={content} {...props} />
}

export const ThumbDownIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
