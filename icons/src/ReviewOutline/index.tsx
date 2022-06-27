import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ReviewOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="ReviewOutline" content={content} {...props} />
}
