import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ThumbUpIcon: React.FC<IconProps> = props => {
  return <Icon alt="ThumbUp" content={content} {...props} />
}
