import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LogOutIcon: React.FC<IconProps> = props => {
  return <Icon alt="LogOut" content={content} {...props} />
}
