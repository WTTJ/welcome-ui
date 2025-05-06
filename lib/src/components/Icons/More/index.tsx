import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const MoreIcon: React.FC<IconProps> = props => {
  return <Icon alt="More" content={content} {...props} />
}
