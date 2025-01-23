import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const BookmarkOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="BookmarkOutline" content={content} {...props} />
}
