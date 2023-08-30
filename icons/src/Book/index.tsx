import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const BookIcon: React.FC<IconProps> = props => {
  return <Icon alt="Book" content={content} {...props} />
}

export const BookIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
