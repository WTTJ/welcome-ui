import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HomeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Home" content={content} {...props} />
}
