import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ControlForwardIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlForward" content={content} {...props} />
}

export const ControlForwardIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
