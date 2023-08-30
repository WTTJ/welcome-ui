import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const HeadsetIcon: React.FC<IconProps> = props => {
  return <Icon alt="Headset" content={content} {...props} />
}

export const HeadsetIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
