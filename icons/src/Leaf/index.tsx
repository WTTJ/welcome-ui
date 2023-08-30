import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LeafIcon: React.FC<IconProps> = props => {
  return <Icon alt="Leaf" content={content} {...props} />
}

export const LeafIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
