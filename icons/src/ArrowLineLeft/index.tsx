import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ArrowLineLeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineLeft" content={content} {...props} />
}
