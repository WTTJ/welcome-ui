import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ExpandTextIcon: React.FC<IconProps> = props => {
  return <Icon alt="ExpandText" content={content} {...props} />
}

export const ExpandTextIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
