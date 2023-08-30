import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ScreenshareOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="ScreenshareOff" content={content} {...props} />
}

export const ScreenshareOffIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
