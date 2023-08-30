import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BookmarkIcon: React.FC<IconProps> = props => {
  return <Icon alt="Bookmark" content={content} {...props} />
}

export const BookmarkIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
