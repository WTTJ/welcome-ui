import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AlertIcon: React.FC<IconProps> = props => {
  return <Icon alt="Alert" content={content} {...props} />
}
