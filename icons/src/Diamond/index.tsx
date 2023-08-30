import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DiamondIcon: React.FC<IconProps> = props => {
  return <Icon alt="Diamond" content={content} {...props} />
}

export const DiamondIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
