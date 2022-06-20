import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BasketballIcon: React.FC<IconProps> = props => {
  return <Icon alt="Basketball" content={content} {...props} />
}
