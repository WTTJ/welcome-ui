import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LockIcon: React.FC<IconProps> = props => {
  return <Icon alt="Lock" content={content} {...props} />
}
