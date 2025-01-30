import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const StarIcon: React.FC<IconProps> = props => {
  return <Icon alt="Star" content={content} {...props} />
}
