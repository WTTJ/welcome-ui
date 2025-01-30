import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const MicrophoneOffIcon: React.FC<IconProps> = props => {
  return <Icon alt="MicrophoneOff" content={content} {...props} />
}
