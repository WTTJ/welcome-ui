import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ThumbupIcon: React.FC<IconProps> = props => {
  return <Icon alt="Thumbup" content={content} {...props} />
}
