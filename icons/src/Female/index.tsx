import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const FemaleIcon: React.FC<IconProps> = props => {
  return <Icon alt="Female" content={content} {...props} />
}
