import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AirplayIcon: React.FC<IconProps> = props => {
  return <Icon alt="Airplay" content={content} {...props} />
}
