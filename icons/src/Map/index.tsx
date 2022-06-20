import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MapIcon: React.FC<IconProps> = props => {
  return <Icon alt="Map" content={content} {...props} />
}
