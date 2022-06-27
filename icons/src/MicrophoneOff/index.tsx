import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MicrophoneOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="MicrophoneOff" content={content} {...props} />
}
