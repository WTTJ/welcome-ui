import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PositiveStraightIcon: React.FC<IconProps> = props => {
  return <Icon alt="PositiveStraight" content={content} {...props} />
}
