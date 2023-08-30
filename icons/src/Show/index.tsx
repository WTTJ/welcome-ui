import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ShowIcon: React.FC<IconProps> = props => {
  return <Icon alt="Show" content={content} {...props} />
}

export const ShowIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
