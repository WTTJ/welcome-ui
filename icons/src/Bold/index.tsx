import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BoldIcon: React.FC<IconProps> = props => {
  return <Icon alt="Bold" content={content} {...props} />
}
