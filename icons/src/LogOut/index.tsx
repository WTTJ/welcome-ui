import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LogOutIcon: React.FC<IconProps> = props => {
  return <Icon alt="LogOut" content={content} {...props} />
}

export const LogOutIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
