import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Move" content={content} {...props} />
}

export const MoveIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
