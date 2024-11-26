import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ThunderclockIcon: React.FC<IconProps> = props => {
  return <Icon alt="Thunderclock" content={content} {...props} />
}
