import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ReviewOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="ReviewOutline" content={content} {...props} />
}
