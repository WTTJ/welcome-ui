import React from 'react'

import type { IconProps } from '@/Icon'
import { Icon } from '@/Icon'

import content from './content.json'

export const ArrowLineUpIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineUp" content={content} {...props} />
}
