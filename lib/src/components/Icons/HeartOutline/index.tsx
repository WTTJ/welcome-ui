import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const HeartOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="HeartOutline" content={content} {...props} />
}
