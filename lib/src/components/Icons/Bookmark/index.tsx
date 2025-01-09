import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const BookmarkIcon: React.FC<IconProps> = props => {
  return <Icon alt="Bookmark" content={content} {...props} />
}
