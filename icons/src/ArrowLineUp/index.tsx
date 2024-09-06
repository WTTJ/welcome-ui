import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ArrowLineUpIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineUp" content={content} {...props} />
}
