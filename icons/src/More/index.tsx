import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MoreIcon: React.FC<IconProps> = props => {
  return <Icon alt="More" content={content} {...props} />
}
