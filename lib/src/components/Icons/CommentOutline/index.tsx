import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CommentOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="CommentOutline" content={content} {...props} />
}
