import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const RemoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Remove" content={content} {...props} />
}
