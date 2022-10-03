import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ThumbdownIcon: React.FC<IconProps> = props => {
  return <Icon alt="Thumbdown" content={content} {...props} />
}
