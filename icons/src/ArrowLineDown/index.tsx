import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ArrowLineDownIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLineDown" content={content} {...props} />
}
