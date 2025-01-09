import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const ControlStopIcon: React.FC<IconProps> = props => {
  return <Icon alt="ControlStop" content={content} {...props} />
}
