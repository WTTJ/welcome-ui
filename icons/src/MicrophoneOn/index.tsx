import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const MicrophoneOnIcon: React.FC<IconProps> = props => {
  return <Icon alt="MicrophoneOn" content={content} {...props} />
}
