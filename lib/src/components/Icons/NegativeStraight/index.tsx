import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const NegativeStraightIcon: React.FC<IconProps> = props => {
  return <Icon alt="NegativeStraight" content={content} {...props} />
}
