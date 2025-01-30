import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ControlPauseIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlPause" content={content} {...props} />
}
