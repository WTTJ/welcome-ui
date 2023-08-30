import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ClockIcon: React.FC<IconProps> = props => {
  return <Icon alt="Clock" content={content} {...props} />
}

export const ClockIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
