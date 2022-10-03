import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AvatarBodyIcon: React.FC<IconProps> = props => {
  return <Icon alt="AvatarBody" content={content} {...props} />
}
