import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const AlertIcon: React.FC<IconProps> = props => {
  return <Icon alt="Alert" content={content} {...props} />
}

export const AlertIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
