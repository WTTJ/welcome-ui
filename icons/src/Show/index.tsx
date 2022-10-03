import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ShowIcon: React.FC<IconProps> = props => {
  return <Icon alt="Show" content={content} {...props} />
}
