import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const OfficeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Office" content={content} {...props} />
}

export const OfficeIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
