import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BookmarkOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="BookmarkOutline" content={content} {...props} />
}

export const BookmarkOutlineIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
