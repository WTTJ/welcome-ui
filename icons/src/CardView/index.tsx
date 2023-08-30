import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CardViewIcon: React.FC<IconProps> = props => {
  return <Icon alt="CardView" content={content} {...props} />
}

export const CardViewIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
