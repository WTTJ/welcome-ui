import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MicrophoneOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="MicrophoneOff" content={content} {...props} />
}

export const MicrophoneOffIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
