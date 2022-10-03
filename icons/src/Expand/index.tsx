import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ExpandIcon: React.FC<IconProps> = props => {
  return <Icon alt="Expand" content={content} {...props} />
}
