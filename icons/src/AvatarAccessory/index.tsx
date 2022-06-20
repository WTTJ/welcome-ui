import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AvatarAccessoryIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarAccessory" content={content} {...props} />
}
