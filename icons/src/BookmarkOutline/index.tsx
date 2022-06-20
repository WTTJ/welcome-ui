import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BookmarkOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="BookmarkOutline" content={content} {...props} />
}
