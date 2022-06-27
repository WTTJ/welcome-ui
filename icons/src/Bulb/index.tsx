import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BulbIcon: React.FC<IconProps> = props => {
  return <Icon alt="Bulb" content={content} {...props} />
}
