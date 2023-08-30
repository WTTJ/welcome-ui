import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CommentOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="CommentOutline" content={content} {...props} />
}

export const CommentOutlineIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
