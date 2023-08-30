import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ControlPauseIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlPause" content={content} {...props} />
}

export const ControlPauseIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
