import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CommonAreaIcon: React.FC<IconProps> = props => {
  return <Icon alt="CommonArea" content={content} {...props} />
}
