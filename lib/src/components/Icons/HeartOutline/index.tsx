import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const HeartOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="HeartOutline" content={content} {...props} />
}
