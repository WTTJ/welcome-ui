import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MansanoryIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mansanory" content={content} {...props} />
}
