import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BurnIcon: React.FC<IconProps> = props => {
  return <Icon alt="Burn" content={content} {...props} />
}
