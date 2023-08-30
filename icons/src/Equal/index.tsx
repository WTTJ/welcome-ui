import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const EqualIcon: React.FC<IconProps> = props => {
  return <Icon alt="Equal" content={content} {...props} />
}

export const EqualIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
