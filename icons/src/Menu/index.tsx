import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MenuIcon: React.FC<IconProps> = props => {
  return <Icon alt="Menu" content={content} {...props} />
}
