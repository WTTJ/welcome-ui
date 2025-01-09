import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ControlPauseIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlPause" content={content} {...props} />
}
