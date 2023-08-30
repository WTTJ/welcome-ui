import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MicIcon: React.FC<IconProps> = props => {
  return <Icon alt="Mic" content={content} {...props} />
}

export const MicIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
