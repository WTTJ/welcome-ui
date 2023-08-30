import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PositiveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Positive" content={content} {...props} />
}

export const PositiveIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
