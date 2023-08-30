import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CollapseIcon: React.FC<IconProps> = props => {
  return <Icon alt="Collapse" content={content} {...props} />
}

export const CollapseIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
