import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Move" content={content} {...props} />
}
