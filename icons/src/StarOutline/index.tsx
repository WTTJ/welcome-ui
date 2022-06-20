import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const StarOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="StarOutline" content={content} {...props} />
}
