import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CardViewIcon: React.FC<IconProps> = props => {
  return <Icon alt="CardView" content={content} {...props} />
}
