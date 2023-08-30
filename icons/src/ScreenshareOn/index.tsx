import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ScreenshareOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="ScreenshareOn" content={content} {...props} />
}

export const ScreenshareOnIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
