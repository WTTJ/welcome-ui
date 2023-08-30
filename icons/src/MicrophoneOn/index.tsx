import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MicrophoneOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="MicrophoneOn" content={content} {...props} />
}

export const MicrophoneOnIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
