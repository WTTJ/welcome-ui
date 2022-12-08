import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ThumbDownIcon: React.FC<IconProps> = props => {
  return <Icon alt="ThumbDown" content={content} {...props} />
}
