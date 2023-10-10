import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const XIcon: React.FC<IconProps> = props => {
  return <Icon alt="X" content={content} {...props} />
}
