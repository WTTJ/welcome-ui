import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CommentIcon: React.FC<IconProps> = props => {
  return <Icon alt="Comment" content={content} {...props} />
}
