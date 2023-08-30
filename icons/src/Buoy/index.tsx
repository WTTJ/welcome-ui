import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BuoyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Buoy" content={content} {...props} />
}

export const BuoyIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
