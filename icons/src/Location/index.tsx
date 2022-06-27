import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LocationIcon: React.FC<IconProps> = props => {
  return <Icon alt="Location" content={content} {...props} />
}
