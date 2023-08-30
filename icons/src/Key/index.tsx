import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const KeyIcon: React.FC<IconProps> = props => {
  return <Icon alt="Key" content={content} {...props} />
}

export const KeyIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
