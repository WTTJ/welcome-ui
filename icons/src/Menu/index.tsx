import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MenuIcon: React.FC<IconProps> = props => {
  return <Icon alt="Menu" content={content} {...props} />
}

export const MenuIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
