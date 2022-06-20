import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CastConnectedIcon: React.FC<IconProps> = props => {
  return <Icon alt="CastConnected" content={content} {...props} />
}
