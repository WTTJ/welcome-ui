import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const EmailIcon: React.FC<IconProps> = props => {
  return <Icon alt="Email" content={content} {...props} />
}

export const EmailIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
