import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const RemoveIcon: React.FC<IconProps> = props => {
  return <Icon alt="Remove" content={content} {...props} />
}

export const RemoveIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
