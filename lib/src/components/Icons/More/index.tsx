import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MoreIcon: React.FC<IconProps> = props => {
  return <Icon alt="More" content={content} {...props} />
}
