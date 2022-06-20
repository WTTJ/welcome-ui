import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const NegativeOutlineIcon: React.FC<IconProps> = props => {
  return <Icon alt="NegativeOutline" content={content} {...props} />
}
