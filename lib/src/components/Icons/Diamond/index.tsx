import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const DiamondIcon: React.FC<IconProps> = props => {
  return <Icon alt="Diamond" content={content} {...props} />
}
