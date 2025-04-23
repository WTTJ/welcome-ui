import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ThumbUpIcon: React.FC<IconProps> = props => {
  return <Icon alt="ThumbUp" content={content} {...props} />
}
