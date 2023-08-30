import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const DateIcon: React.FC<IconProps> = props => {
  return <Icon alt="Date" content={content} {...props} />
}

export const DateIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
