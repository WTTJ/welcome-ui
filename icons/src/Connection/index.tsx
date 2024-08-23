import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ConnectionIcon: React.FC<IconProps> = props => {
  return <Icon alt="Connection" content={content} {...props} />
}
