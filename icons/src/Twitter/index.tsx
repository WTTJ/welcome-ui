import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const TwitterIcon: React.FC<IconProps> = props => {
  return <Icon alt="Twitter" content={content} {...props} />
}

export const TwitterIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
