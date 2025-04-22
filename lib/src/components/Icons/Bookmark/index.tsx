import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const BookmarkIcon: React.FC<IconProps> = props => {
  return <Icon alt="Bookmark" content={content} {...props} />
}
