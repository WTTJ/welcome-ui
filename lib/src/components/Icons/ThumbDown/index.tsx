import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ThumbDownIcon: React.FC<IconProps> = props => {
  return <Icon alt="ThumbDown" content={content} {...props} />
}
