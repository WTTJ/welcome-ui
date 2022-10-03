import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TypeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Type" content={content} {...props} />
}
