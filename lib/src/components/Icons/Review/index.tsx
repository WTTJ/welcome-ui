import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ReviewIcon: React.FC<IconProps> = props => {
  return <Icon alt="Review" content={content} {...props} />
}
