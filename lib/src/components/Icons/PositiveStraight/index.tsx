import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const PositiveStraightIcon: React.FC<IconProps> = props => {
  return <Icon alt="PositiveStraight" content={content} {...props} />
}
