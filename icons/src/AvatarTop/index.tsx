import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AvatarTopIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarTop" content={content} {...props} />
}
