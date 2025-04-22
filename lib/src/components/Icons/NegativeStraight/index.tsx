import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const NegativeStraightIcon: React.FC<IconProps> = props => {
  return <Icon alt="NegativeStraight" content={content} {...props} />
}
