import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ArrowUpIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowUp" content={content} {...props} />
}

export const ArrowUpIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
