import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const GearIcon: React.FC<IconProps> = props => {
  return <Icon alt="Gear" content={content} {...props} />
}
