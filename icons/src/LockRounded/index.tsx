import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LockRoundedIcon: React.FC<IconProps> = props => {
  return <Icon alt="LockRounded" content={content} {...props} />
}
