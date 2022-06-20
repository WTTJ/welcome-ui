import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const NegativeStraightIcon: React.FC<IconProps> = props => {
  return <Icon alt="NegativeStraight" content={content} {...props} />
}
