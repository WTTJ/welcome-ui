import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CommentOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="CommentOutline" content={content} {...props} />
}
