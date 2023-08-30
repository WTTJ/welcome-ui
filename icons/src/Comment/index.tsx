import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CommentIcon: React.FC<IconProps> = props => {
  return <Icon alt="Comment" content={content} {...props} />
}

export const CommentIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
