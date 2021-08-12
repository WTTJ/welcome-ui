import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FactoryIcon: React.FC<IconProps> = props => {
  return <Icon alt="Factory" content={content} {...props} />
}
