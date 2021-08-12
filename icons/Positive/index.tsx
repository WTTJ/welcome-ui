import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PositiveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Positive" content={content} {...props} />
}
