import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const StarOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="StarOutline" content={content} {...props} />
}
