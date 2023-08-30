import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ExpandIcon: React.FC<IconProps> = props => {
  return <Icon alt="Expand" content={content} {...props} />
}

export const ExpandIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
