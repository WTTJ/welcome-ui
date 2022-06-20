import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const EarthIcon: React.FC<IconProps> = props => {
  return <Icon alt="Earth" content={content} {...props} />
}
