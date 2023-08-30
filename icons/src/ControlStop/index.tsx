import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ControlStopIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlStop" content={content} {...props} />
}

export const ControlStopIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
